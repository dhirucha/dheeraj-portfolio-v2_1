import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid form data." }, { status: 400 });
  }

  const { name, email, message } = parsed.data;

  // To actually deliver email, add RESEND_API_KEY to your environment and
  // uncomment the block below (npm install resend is already covered by
  // adding "resend" to package.json dependencies).
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "portfolio@dheerajchaubey.dev",
  //   to: "dheerajubecha@gmail.com",
  //   subject: `New portfolio message from ${name}`,
  //   replyTo: email,
  //   text: message,
  // });

  if (!process.env.RESEND_API_KEY) {
    console.log("[contact] RESEND_API_KEY not set — logging submission instead of sending:", {
      name,
      email,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
