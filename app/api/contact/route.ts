import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, businessName, phone, email, message } = body;

    // If we had a logger service or real email integration, we would use it here.

    // If RESEND_API_KEY was available, we would do:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    return NextResponse.json({ success: true, message: "Request received successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
