import { EmailTemplate } from './../../_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:any) {
    const response = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Ankith M@resend.dev>',
      to: ['responce.emailToSend'],
      subject: 'Hello world',
      react: EmailTemplate({ response }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
