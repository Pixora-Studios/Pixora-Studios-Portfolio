import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      businessName,
      phone,
      email,
      businessType,
      projectType,
      budget,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@pixorastudios.com';
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || 'Pixora Studios <hello@pixorastudios.com>';

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured.');
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    // Resolve a readable project type label
    const projectTypeLabel = projectType || businessType || 'Not specified';

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `New Lead: ${name} — ${businessName || 'Unknown'} (${projectTypeLabel})`,
        html: `
          <h1>New Project Enquiry — Pixora Studios</h1>

          <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:10px 12px;font-weight:600;color:#555;width:180px;">Name</td>
              <td style="padding:10px 12px;">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;background:#fafafa;">
              <td style="padding:10px 12px;font-weight:600;color:#555;">Email</td>
              <td style="padding:10px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:10px 12px;font-weight:600;color:#555;">Phone</td>
              <td style="padding:10px 12px;">${phone}</td>
            </tr>
            ` : ''}
            <tr style="border-bottom:1px solid #eee;background:#fafafa;">
              <td style="padding:10px 12px;font-weight:600;color:#555;">Business / Company</td>
              <td style="padding:10px 12px;">${businessName || '—'}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:10px 12px;font-weight:600;color:#555;">Project Type</td>
              <td style="padding:10px 12px;">${projectTypeLabel}</td>
            </tr>
            ${budget ? `
            <tr style="border-bottom:1px solid #eee;background:#fafafa;">
              <td style="padding:10px 12px;font-weight:600;color:#555;">Budget</td>
              <td style="padding:10px 12px;">${budget}</td>
            </tr>
            ` : ''}
          </table>

          <h3 style="margin-top:24px;font-family:sans-serif;">Project Details</h3>
          <p style="font-family:sans-serif;font-size:14px;line-height:1.6;color:#333;background:#f9f9f9;padding:16px;border-radius:8px;">
            ${message.replace(/\n/g, '<br/>')}
          </p>
        `,
      }),
    });

    const responseData = await res.json().catch(() => null);

    if (!res.ok) {
      console.error('Resend API Error:', responseData);
      return NextResponse.json(
        { error: 'Email could not be sent.', details: responseData },
        { status: 502 }
      );
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
