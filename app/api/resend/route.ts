import { WaitlistEmail } from '../../../emails/waitlist';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'hizla <info@updates.hizla.io>',
      to: [body.email],
      subject: "hizla - thanks for joining waitlist!",
      react: WaitlistEmail({}) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}