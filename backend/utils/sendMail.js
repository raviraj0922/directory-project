const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "thevoiceofazamgarh@gmail.com",          // 🔐 Use app password
    pass: "Info@2024",            // Not your regular password!
  },
});

const sendMail = async (formData) => {
  const mailOptions = {
    from: '"Voice of Azamgarh" <yourgmail@gmail.com>',
    to: "thevoiceofazamgarh@gmail.com",
    subject: `New Forum Submission: ${formData.subject || "No Subject"}`,
    html: `
      <h3>New Submission from Community Forum</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Mobile:</strong> ${formData.mobile}</p>
      <p><strong>City:</strong> ${formData.city}</p>
      <p><strong>Block:</strong> ${formData.block}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      ${formData.image ? `<p><strong>Image:</strong> ${formData.image}</p>` : ""}
      ${formData.video ? `<p><strong>Video:</strong> ${formData.video}</p>` : ""}
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendMail;
