import nodemailer, { TransportOptions } from "nodemailer";

interface CustomTransportOptions extends TransportOptions {
  host: string;
  port: number;
  secure?: boolean;
  auth: {
    user: string;
    pass: string;
  };
  tls?: {
    rejectUnauthorized?: boolean;
  };
}

const sendMailWithNodeMailer = async (
  to: string,
  subject: string,
  link: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // or set to false if not using SSL/TLS
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // This may be needed depending on your mail server
      },
    } as CustomTransportOptions);

    const mailOptions = {
      from: `Support JACKBIT <${process.env.SENDER_USER}>`,
      to: to,
      subject: subject,
      html: link,
    };
    let response = await transporter.sendMail(mailOptions);
    console.log("mailer", response);
    return response;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const sendMail = async (to: string, token: number) => {
  const subject = "Reset password";
  // replace this url with the link to the reset password page of your front-end app
  const link = `${"http://localhost:3000"}/?reset-password-token=${token}`;

  // await sendEmail(to, subject, { link }, 'resetPassword');
  await sendMailWithNodeMailer(to, subject, link);
};

const emailService = {
  sendMail,
  sendMailWithNodeMailer,
};

export default emailService;
