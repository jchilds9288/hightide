const router = require("express").Router();
const controller = require("../controllers/controller")

/* GET users listing. */
router.route('/') 
.post(controller.create)

module.exports = router;
