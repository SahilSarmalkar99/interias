import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, notes } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "ajay.interiorconcepts@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${notes}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    return res.status(500).json({ message: "Error sending email", error });
  }
}
