import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, budget, message } = body;

    // Log the contact form submission
    console.log('Contact form submission:', { name, email, budget, message });

    // In production, you would send an email or save to a database here
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ ok: false, error: 'Failed to process contact form' }, { status: 500 });
  }
}
