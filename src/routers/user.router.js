const { Router } = require("express");
const {  userAll, userDelete } = require("../controllers/user.controller");

const router = Router()

router.get("/user/all", userAll)
router.delete("/user/delete/:id", userDelete)


module.exports = router;