import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, color: '#38bdf8', marginBottom: 12 }}>
          NGN Hacks
        </div>
        <div style={{ fontSize: 28, color: '#94a3b8' }}>
          York Region High School Hackathon
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
