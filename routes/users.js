const router = require("express").Router();
const controller = require("../controllers/controller")

/* GET users listing. */
router.route('/') 
.post(controller.create);

// Matches with "api/users/:id"
router.route("/:id")
.get(controller.findById)
.post(controller.createTask)

module.exports = router;
