import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function formatRegistrationEmail(subject: string, body: any): string {
  if (subject === "Participant Registration") {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          🎓 New Participant Registration
        </h2>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${escapeHtml(body.name || "")}</p>
          <p><strong>Email:</strong> ${escapeHtml(body.email || "")}</p>
          <p><strong>School:</strong> ${escapeHtml(body.school || "")}</p>
          <p><strong>Grade:</strong> ${escapeHtml(body.grade || "")}</p>
          <p><strong>Experience Level:</strong> ${escapeHtml(body.experience || "")}</p>
          <p><strong>Team Size:</strong> ${escapeHtml(body.teamSize || "")}</p>
          ${body.teammates ? `<p><strong>Teammates:</strong> ${escapeHtml(body.teammates)}</p>` : ""}
          ${body.tshirt ? `<p><strong>T-Shirt Size:</strong> ${escapeHtml(body.tshirt)}</p>` : ""}
          ${body.dietary ? `<p><strong>Dietary Restrictions:</strong> ${escapeHtml(body.dietary)}</p>` : ""}
        </div>
        <p style="color: #64748b; font-size: 14px;">
          This is an automated email from the NGN Hacks registration form.
        </p>
      </div>
    `;
  }

  if (subject.includes("Application") || ["Mentor", "Volunteer", "Sponsor"].includes(subject)) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          👥 New ${escapeHtml(subject)} Application
        </h2>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${escapeHtml(body.name || "")}</p>
          <p><strong>Email:</strong> ${escapeHtml(body.email || "")}</p>
          <p><strong>Role:</strong> ${escapeHtml(body.role || subject)}</p>
          ${body.background ? `<p><strong>Background:</strong><br>${escapeHtml(body.background).replace(/\n/g, "<br>")}</p>` : ""}
          ${body.availability ? `<p><strong>Availability:</strong><br>${escapeHtml(body.availability).replace(/\n/g, "<br>")}</p>` : ""}
          ${body.message ? `<p><strong>Message:</strong><br>${escapeHtml(body.message).replace(/\n/g, "<br>")}</p>` : ""}
        </div>
        <p style="color: #64748b; font-size: 14px;">
          This is an automated email from the NGN Hacks registration form.
        </p>
      </div>
    `;
  }

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
        📧 New Contact Form Submission
      </h2>
      <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(body.name || "")}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.email || "")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(body.subject || "")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(body.message || "").replace(/\n/g, "<br>")}</p>
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
        { error: "Name, email, and subject are required" },
        { status: 400 }
      );
    }

    const isRegistration =
      subject === "Participant Registration" ||
      subject.includes("Application") ||
      subject.includes("Mentor") ||
      subject.includes("Volunteer") ||
      subject.includes("Sponsor") ||
      ["Mentor", "Volunteer", "Sponsor"].includes(subject);

    if (!isRegistration && !message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const contactEmail = process.env.CONTACT_TO_EMAIL || "info@ngnhacks.ca";
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    // If not configured, return 503 (but DO NOT crash the build)
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured. Missing RESEND_API_KEY." },
        { status: 503 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const emailHtml = message
      ? formatRegistrationEmail(subject, { ...body, message })
      : formatRegistrationEmail(subject, body);

    await resend.emails.send({
      from: "NGN Hacks <onboarding@resend.dev>",
      to: contactEmail,
      reply_to: email, // IMPORTANT: reply_to (not replyTo)
      subject: `[NGN Hacks] ${subject}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to process request", details: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
