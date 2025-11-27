// server/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// POST /api/admissions – handle form submission
app.post("/api/admissions", async (req, res) => {
  const { studentName, parentName, phone, email, grade, message } = req.body;

  if (!studentName || !parentName || !phone || !grade) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Configure your SMTP (Gmail / other provider)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.ADMISSIONS_TO_EMAIL || process.env.SMTP_USER;

    const mailOptions = {
      from: `"School Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `New Admission Enquiry - ${studentName}`,
      text: `
New Admission Enquiry

Student Name: ${studentName}
Parent / Guardian: ${parentName}
Phone: ${phone}
Email: ${email || "-"}
Applying for Class: ${grade}

Message:
${message || "-"}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({
      message:
        "Admission enquiry submitted successfully. Our team will contact you soon.",
    });
  } catch (err) {
    console.error("Email send error:", err);
    return res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Admissions server running at http://localhost:${PORT}`);
});
