const { readDoc } = require('../plugins/ReadExcel')
const { bulk } = require('../plugins/MailSender')

const MailController = {
  index: async (req, res) => {
    return res.json({
      status: true,
      message: 'Socket on'
    })
  },
  read: async (req, res) => {
    try {
      if (req.files) {
        const { auth, from, subject, message } = req.body
        const readFile = await readDoc(req.files.doc)
        
        if (!readFile.status) return res.json(readFile)
        if (readFile.status && readFile.message.length > 0) {
          const sendBulk = await bulk(auth, from, readFile.message, subject, message)
          return res.json(sendBulk)
        } else {
          return res.json({
            status: false,
            message: "Email tujuan tidak di temukan"
          })
        }
      }
      return res.json({
        status: false,
        message: "Error: request not a file"
      })
    } catch (error) {
      return res.json({
        status: false,
        message: "Error: " + error
      })
    }
  },
  send: async (req, res) => {
    const data = await bulk()
    return res.json(data)
  }
}

module.exports = MailController