import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Ballonkunst Lahr <noreply@ballonkunst-lahr.de>',
      to: 'info@ballonkunst-lahr.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e05a8a;">Neue Kontaktanfrage über die Website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">E-Mail:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Nachricht:</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Diese E-Mail wurde über das Kontaktformular auf ballonkunst-lahr.de gesendet.</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return Response.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 });
  }
}
