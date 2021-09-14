const { readDoc } = require('../plugins/ReadExcel')
const { bulk } = require('../plugins/MailSender')

const MailController = {
  index: async (req, res) => {
    return res.json({
      status: true,
      message: "ok"
    })
  },
  read: async (req, res) => {
    try {
      if (req.files) {
        const readFile = await readDoc(req.files.doc)
        
        if (!readFile.status) return res.json(readFile)
        return res.json(readFile)
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