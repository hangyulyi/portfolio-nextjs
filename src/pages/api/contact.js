import nodemailer from "nodemailer"

export default async function ContactAPI (req, res) {
    const { name, email, message } = req.body

    const user = process.env.SMTP_USER;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.SMTP_PASS,
        }
    })

    try {

        const mail = await transporter.sendMail({
            from: user,
            to: "hangyulyi3@gmail.com",
            replyTo: email,
            subject: `Contact message from ${name}`,
            html:`
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
        })

        console.log("Message sent:", mail.messageId)

        return res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Could not send email. Your message was not sent."
        })
    }
}