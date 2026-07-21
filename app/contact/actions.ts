"use server";

import nodemailer from "nodemailer";

interface ContactData {
	name: string;
	email: string;
	projectType: string;
	message: string;
}

export async function sendContactEmail(formData: ContactData) {
	// Configure SMTP Transporter
	// These values will be read from environment variables (.env.local)
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST || "smtp.gmail.com",
		port: parseInt(process.env.SMTP_PORT || "587"),
		secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
		auth: {
			user: process.env.SMTP_USER, // Your sender email (e.g. gmail account)
			pass: process.env.SMTP_PASS, // Your sender email App Password
		},
	});

	const mailOptions = {
		from: `"${formData.name}" <${process.env.SMTP_USER || formData.email}>`,
		to: "sajinsathyan001@gmail.com", // Admin recipient address
		replyTo: formData.email,
		subject: `New Portfolio Inquiry: ${formData.projectType} from ${formData.name}`,
		text: `
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}

Message:
${formData.message}
		`,
		html: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
	<h2 style="color: #e05a44; border-bottom: 2px solid #e05a44; padding-bottom: 8px; margin-top: 0;">New Portfolio Inquiry</h2>
	<p><strong>Name:</strong> ${formData.name}</p>
	<p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
	<p><strong>Project Type:</strong> ${formData.projectType}</p>
	<hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
	<p><strong>Message:</strong></p>
	<p style="white-space: pre-wrap; line-height: 1.6; background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 3px solid #ccc;">${formData.message}</p>
</div>
		`,
	};

	try {
		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (error: any) {
		console.error("Email sending failed:", error);
		return { 
			success: false, 
			error: error.message || "Failed to send email message." 
		};
	}
}
