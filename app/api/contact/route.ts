
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      company,
      service,
      message,
    } = body;

    // Basic validation
    if (!fullName || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email received by Nivvish Infotech
    await transporter.sendMail({
      from: `"Nivvish Infotech Website" <${process.env.SMTP_USER}>`,
      to: "nisha@nivvishinfotech.com",
      replyTo: email,
      subject: `New Website Enquiry - ${service}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">

          <div style="background: #1769aa; padding: 25px; color: white;">
            <h2 style="margin: 0;">
              New Website Enquiry
            </h2>

            <p style="margin: 8px 0 0;">
              Nivvish Infotech
            </p>
          </div>

          <div style="padding: 25px;">

            <h3 style="color: #172033;">
              Customer Details
            </h3>

            <table style="width: 100%; border-collapse: collapse;">

              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
                  Name
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${fullName}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
                  Email
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${email}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
                  Phone
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${phone}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
                  Company
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${company || "Not provided"}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">
                  Service
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  ${service}
                </td>
              </tr>

            </table>

            <h3 style="color: #172033; margin-top: 25px;">
              Project Details
            </h3>

            <div style="background: #f7f9fc; padding: 15px; border-radius: 6px; line-height: 1.6;">
              ${message}
            </div>

            <div style="margin-top: 25px; padding: 15px; background: #eef5ff; border-radius: 6px;">
              <strong>Reply to:</strong>
              ${email}
            </div>

          </div>

          <div style="background: #f7f9fc; padding: 15px 25px; text-align: center; color: #777;">
            <small>
              This enquiry was submitted from the Nivvish Infotech website.
            </small>
          </div>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
