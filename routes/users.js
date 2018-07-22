const router = require("express").Router();
const controller = require("../controllers/controller")

/* GET users listing. */
router.route('/') 
.post(controller.create)
// .post(controller.createTask)
// .get(controller.findAllTasks)



// Matches with "api/users/:id"
router.route("/:id")
// .get(controller.findById)
.post(controller.createTask)
.get(controller.findAllTasks)



module.exports = router;
