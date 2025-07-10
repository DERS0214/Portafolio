import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const { name, email, subject, message } = req.body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: 'Faltan campos requeridos' });
    return;
  }

  if (!process.env.RESEND_API_KEY && !process.env.VITE_RESEND_API_KEY) {
    res.status(500).json({ error: 'Clave API de Resend no configurada' });
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'dramirez021487@gmail.com',
      subject: `Mensaje de Portafolio: ${subject}`,
      html: `
        <p><strong>De:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <br>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) throw new Error(error.message);

    res.status(200).json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Error al enviar email' });
  }
} 