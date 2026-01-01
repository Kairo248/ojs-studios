import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      // In development, log the submission instead of failing
      if (process.env.NODE_ENV === "development") {
        console.log("Contact Form Submission (Development Mode):", {
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        });
        return NextResponse.json(
          { message: "Message logged (Resend not configured)" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(apiKey);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "Lsstudios@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name} - OJS Studios`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #00b4d8 0%, #9d4edd 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #00b4d8;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                padding: 10px;
                background: white;
                border-left: 3px solid #9d4edd;
                border-radius: 4px;
              }
              .message-box {
                background: white;
                padding: 15px;
                border-left: 3px solid #9d4edd;
                border-radius: 4px;
                white-space: pre-wrap;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>OJS Studios Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">
                  <a href="mailto:${email}" style="color: #00b4d8; text-decoration: none;">${email}</a>
                </div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
              <div class="footer">
                <p>This email was sent from the OJS Studios contact form.</p>
                <p>You can reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission - OJS Studios

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the OJS Studios contact form.
You can reply directly to this email to respond to ${name}.
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error details:", errorMessage);
    return NextResponse.json(
      { error: "Internal server error", details: process.env.NODE_ENV === "development" ? errorMessage : undefined },
      { status: 500 }
    );
  }
}

