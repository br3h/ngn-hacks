import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function formatRegistrationEmail(subject: string, body: any): string {
  if (subject === 'Participant Registration') {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          🎓 New Participant Registration
        </h2>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>School:</strong> ${body.school}</p>
          <p><strong>Grade:</strong> ${body.grade}</p>
          <p><strong>Experience Level:</strong> ${body.experience}</p>
          <p><strong>Team Size:</strong> ${body.teamSize}</p>
          ${body.teammates ? `<p><strong>Teammates:</strong> ${body.teammates}</p>` : ''}
          ${body.tshirt ? `<p><strong>T-Shirt Size:</strong> ${body.tshirt}</p>` : ''}
          ${body.dietary ? `<p><strong>Dietary Restrictions:</strong> ${body.dietary}</p>` : ''}
        </div>
        <p style="color: #64748b; font-size: 14px;">
          This is an automated email from the NGN Hacks registration form.
        </p>
      </div>
    `;
  }

  if (subject.includes('Application') || ['Mentor', 'Volunteer', 'Sponsor'].includes(subject)) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          👥 New ${subject} Application
        </h2>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Role:</strong> ${body.role || subject}</p>
          ${body.background ? `<p><strong>Background:</strong><br>${body.background.replace(/\n/g, '<br>')}</p>` : ''}
          ${body.availability ? `<p><strong>Availability:</strong><br>${body.availability.replace(/\n/g, '<br>')}</p>` : ''}
          ${body.message ? `<p><strong>Message:</strong><br>${body.message.replace(/\n/g, '<br>')}</p>` : ''}
        </div>
        <p style="color: #64748b; font-size: 14px;">
          This is an automated email from the NGN Hacks registration form.
        </p>
      </div>
    `;
  }

  // Default contact form
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
        📧 New Contact Form Submission
      </h2>
      <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${body.message.replace(/\n/g, '<br>')}</p>
      </div>
      <p style="color: #64748b; font-size: 14px;">
        This is an automated email from the NGN Hacks website contact form.
      </p>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject) {
      return NextResponse.json(
        { error: 'Name, email, and subject are required' },
        { status: 400 }
      );
    }

    // For registration forms, message is optional as data is in the body
    // For contact forms, message is required
    if (!message && subject !== 'Participant Registration' && !subject.includes('Application') && !subject.includes('Mentor') && !subject.includes('Volunteer') && !subject.includes('Sponsor')) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_TO_EMAIL || 'info@ngnhacks.ca';

    // If Resend API key is configured, use it
    if (process.env.RESEND_API_KEY) {
      try {
        const emailHtml = message 
          ? formatRegistrationEmail(subject, { ...body, message })
          : formatRegistrationEmail(subject, body);

        await resend.emails.send({
          from: 'NGN Hacks <onboarding@resend.dev>', // Update with your verified domain
          to: contactEmail,
          replyTo: email,
          subject: `[NGN Hacks] ${subject}`,
          html: emailHtml,
        });

        return NextResponse.json({ success: true });
      } catch (resendError: any) {
        console.error('Resend error:', resendError);
        return NextResponse.json(
          { error: 'Failed to send email. Please check your Resend configuration.', details: resendError.message },
          { status: 500 }
        );
      }
    }

    // Fallback: return error if email service is not configured
    console.error('Resend API key not configured. Email cannot be sent.');
    return NextResponse.json(
      { 
        error: 'Email service not configured. Please set RESEND_API_KEY in your environment variables.',
        warning: 'Email service not configured' 
      },
      { status: 503 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error.message },
      { status: 500 }
    );
  }
}

