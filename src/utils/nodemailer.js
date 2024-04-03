import nodemailer from 'nodemailer'
export const sendMail = async (emailTo,emailSubject,emailText) => {
  const transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: { user: "info@teamrabbil.com", pass: "~sR4[bhaC[Qs" },
    tls: { rejectUnauthorized: false },
  });
  const mailOption = {
    from: '"Maddison Foo Koch 👻" <info@teamrabbil.com>', // sender address
    to: emailTo, // list of receivers
    subject: emailSubject, // Subject line
    text: emailText,
  };
  return transporter.sendMail(mailOption)
}