import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, about_text, message_text } = body;

    if (!name || !email || !about_text || !message_text) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Portfolio Contact — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; background: #f7f8fa; color: #333;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); overflow: hidden;">
            <div style="background: linear-gradient(90deg, #007bff, #00bcd4); padding: 15px 25px; color: white; font-size: 18px; font-weight: bold;">
              Portfolio Contact Form Submission
            </div>
            <div style="padding: 25px;">
              <p><strong style="color: #007bff;">Name:</strong> ${name}</p>
              <p><strong style="color: #007bff;">Email:</strong> <a href="mailto:${email}" style="color: #00bcd4;">${email}</a></p>
              <p><strong style="color: #007bff;">About:</strong> ${about_text}</p>
              <p><strong style="color: #007bff;">Message:</strong><br/>${message_text}</p>
            </div>
            <div style="background: #f0f4f8; padding: 12px 25px; text-align: center; font-size: 13px; color: #666;">
              ✉️ This message was sent from your portfolio contact form.
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}
