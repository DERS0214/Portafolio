import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { name, email, subject, message } = req.body ?? {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: 'Clave API no configurada' });
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "scadrami@espol.edu.ec",
      reply_to: email,          // el que escribió el formulario
      subject: `Mensaje de Portafolio: ${subject}`,
      html: `
        <p><strong>De:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <br />
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) throw new Error(error.message);

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Error al enviar email' });
  }
} 