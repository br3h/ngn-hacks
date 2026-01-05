# NGN Hacks Website

One-page website for Next Generation Hacks (NGN Hacks), a York Region high school hackathon.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file in the root directory (copy from `.env.example`):
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=info@ngnhacks.ca
```

3. Add the owl icon:
   - Save the owl image as `owl-icon.png` in the `/public` folder
   - The icon will appear in the navbar, hero section, and as the favicon
   - If not provided, the site will fallback to `ngnhacks.png`

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Update Date, Location, and Registration URL

Edit `src/lib/site.ts`:
- `date`: Update the event date
- `location`: Update the venue location
- `registrationUrl`: Update with the actual registration URL when available

### Email Setup (Resend)

1. Sign up for a Resend account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Note: You'll need to verify a domain in Resend to send from your own domain. For testing, you can use `onboarding@resend.dev` (update in `app/api/contact/route.ts`)

**Fallback**: If Resend is not configured, the contact form will still work but won't send emails. Users can use the mailto link displayed in the contact section.

### Logo

Place your logo at `/public/ngnhacks.png`. The logo should be a PNG file.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Email API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Main page with all sections
├── src/
│   ├── components/            # Reusable components
│   │   ├── Accordion.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── SectionHeader.tsx
│   │   └── Timeline.tsx
│   └── lib/                   # Data files
│       ├── faq.ts
│       ├── schedule.ts
│       ├── site.ts            # Site configuration
│       ├── sponsors.ts
│       └── team.ts
└── public/
    └── ngnhacks.png           # Logo
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
4. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

The `out` directory will contain the static export (if configured for static export) or you can run:
```bash
npm start
```

Make sure to set environment variables in your hosting platform.

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Resend (email)

## License

Private project for NGN Hacks.

