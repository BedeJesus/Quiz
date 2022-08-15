const router  = require("express").Router()
const QuestionController = require("../controllers/QuestionController")


router.post('/create',QuestionController.create)
router.get('/',QuestionController.getAll)
router.get('/ten',QuestionController.getTen)

module.exports = router
