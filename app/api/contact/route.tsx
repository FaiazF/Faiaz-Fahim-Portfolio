import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create mailto link that will be sent to your email
    // In a production environment, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, this will log the message and return success
    console.log("[v0] Contact form submission:", { name, email, message })

    // TODO: Integrate with an email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'faiazfahim64@gmail.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
