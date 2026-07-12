// File location in your project: app/api/email/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, phone, email, message, IP, currentdate } = body;

        // Basic server-side validation
        if (!name || !email) {
            return NextResponse.json(
                { success: false, error: "Name and email are required." },
                { status: 400 }
            );
        }

        // Configure the transporter using your Gmail account credentials
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // your sending gmail address
                pass: process.env.EMAIL_PASS, // Gmail App Password (NOT your normal password)
            },
        });

        // The email that lands in YOUR inbox
        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
            to: "sikanderabtach99@gmail.com",
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
                    <div style="background:#7843E9; padding: 20px; color: #fff;">
                        <h2 style="margin:0;">New Message From Your Portfolio</h2>
                    </div>
                    <div style="padding: 20px; color:#333;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                        <p><strong>Message:</strong></p>
                        <p style="background:#f7f7f7; padding:12px; border-radius:6px;">${message || "No message"}</p>
                        <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />
                        <p style="font-size:12px; color:#999;">IP / Location: ${IP || "N/A"}</p>
                        <p style="font-size:12px; color:#999;">Submitted on: ${currentdate || "N/A"}</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, error: "Failed to send email" },
            { status: 500 }
        );
    }
}