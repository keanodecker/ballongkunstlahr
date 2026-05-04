import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message, company, subject } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 });
    }

    const isPartner = Boolean(company || subject);
    const emailSubject = isPartner
      ? `[Partner] ${subject || 'Anfrage'}${company ? ' – ' + company : ''}`
      : `Neue Anfrage von ${name}`;

    const rows = [];
    if (company) rows.push(['Unternehmen', company]);
    rows.push(['Name', name]);
    rows.push(['E-Mail', `<a href="mailto:${email}">${email}</a>`]);
    if (subject) rows.push(['Betreff', subject]);
    rows.push(['Nachricht', `<span style="white-space: pre-wrap;">${message}</span>`]);

    const tableRows = rows
      .map(
        ([label, value]) => `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 140px; vertical-align: top;">${label}:</td>
          <td style="padding: 8px 0;">${value}</td>
        </tr>`
      )
      .join('');

    await resend.emails.send({
      from: 'Ballonkunst Lahr <noreply@ballonkunst-lahr.de>',
      to: 'info@media-castle.com',
      replyTo: email,
      subject: emailSubject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e05a8a;">${isPartner ? 'Neue Business-Anfrage' : 'Neue Kontaktanfrage'} über die Website</h2>
          <table style="width: 100%; border-collapse: collapse;">${tableRows}</table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Diese E-Mail wurde über das ${isPartner ? 'Partnerformular' : 'Kontaktformular'} auf ballonkunst-lahr.de gesendet.</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return Response.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 });
  }
}
