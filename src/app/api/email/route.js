import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
export async function POST(req, res) {
    try {
        const { name, email, message, IP, currentdate } = await req.json();
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "dev.sr@productions-dev.com",
                pass: "Qwer@123!@#"
            }
        });
        const mailOptions = {
            from: "dev.sr@productions-dev.com",
            to: "dev.sr@productions-dev.com",
            subject: `Portfolio Message`,
            html: `<table>
                    <tr>
                        <th>Name:</th>
                        <td>${name}</td>
                    </tr> 
                    <tr>
                        <th>Email:</th>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <th>Message:</th>
                        <td>${message}</td>
                    </tr>
                    <tr>
                        <th>Date:</th>
                        <td>${currentdate}</td>
                    </tr>
                    <tr>
                        <th>IP:</th>
                        <td>${IP}</td>
                    </tr>
            </table>`
        }
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ "mesaage": "Email sent successfully", "status": 200 })
    } catch (error) {
        return NextResponse.json({ "mesaage": "Failed to sent Email", "status": 500 })
    }
}