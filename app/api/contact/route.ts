import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, businessName, phone, email, businessType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    console.log('New Contact Form Submission:', {
      name,
      businessName,
      phone,
      email,
      businessType,
      budget,
      message,
    });

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Pixora Studios <onboarding@resend.dev>',
            to: ['debidutta@example.com'], // Replace with real destination
            subject: `New Lead: ${name} from ${businessName || 'Unknown'}`,
            html: `
              <h1>New Lead from Pixora Studios</h1>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Business:</strong> ${businessName} (${businessType})</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          }),
        });

        if (!res.ok) {
          const error = await res.json();
          console.error('Resend API Error:', error);
          // Still return success to user since we logged it
        }
      } catch (err) {
        console.error('Failed to send email via Resend:', err);
      }
    } else {
      console.warn('RESEND_API_KEY is not set. Email not sent.');
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
