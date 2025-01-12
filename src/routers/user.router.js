const { Router } = require("express");
const { UserRegister } = require("../controllers/user.controller");

const router = Router()

router.post("/telegram/register", UserRegister)


module.exports = router;