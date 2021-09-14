const mailer = require('../config/Mail')

const bulk = async (authorization, from, to, subject, message) => {
  try {
    if (!authorization) return { status: false, message: "Please enter your email account authorization" }

    const transporter = await mailer(authorization.host, authorization.user, authorization.pass)
    transporter.verify()

    if (!from) return { status: false, message: "Please enter the sender of the message" }
    if (!to) return { status: false, message: "Please enter the purpose email of your message" }
    if (!subject) return { status: false, message: "Please enter subject for message" }

    to.map(reciver => {
      transporter.sendMail({
        from: `${from} <${authorization.user}>`,
        to: reciver,
        subject: subject,
        html: message
      }, error => {
        if (error) return { status: false, message: "Error sending blast" }
        return { status: true, message: "Complete sending blast" }
      })
    })
  } catch (error) {
    return { status: false, message: "Error: " + error }
  }
}

const single = (host, user, pass) => {
  return true
}

module.exports = { bulk, single }