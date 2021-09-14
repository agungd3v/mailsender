const router = require("express").Router()

const MailController = require("../controllers/MailController")

router.get('/mail', MailController.index)
router.post('/read', MailController.read)
router.post('/send', MailController.send)

module.exports = router