import nodemailer from "nodemailer";

const emailProcessor = async (emailBody) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "aida5@ethereal.email", // generated ethereal user
        pass: "nhhBq7yH9dEpJukWUZ", // generated ethereal password
      },
    });
    let info = await transporter.sendMail(emailBody);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    error && console.log(error);
  }
};

export const sendEmail = (emailData) => {
  console.log(emailData.url);
  const email = {
    from: "aida5@ethereal.email", // sender address
    to: emailData.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Hello world?</b> <br/> <a href=${emailData.url}>Click to verify</a>`, // html body
  };
  emailProcessor(email);
};

export const sendEmailVerification = (emailData) => {
  const email = {
    from: "aida5@ethereal.email", // sender address
    to: emailData.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Email Verified", // plain text body
    html: "<b>Email Verified</b>", // html body
  };
  emailProcessor(email);
};
