const { Router } = require("express")
const { openRegister, openLogin, register, login } = require("../controllers/admin.controller")


const router = Router()

router.get("/openlogin", openLogin)
router.get("/open/register", openRegister)
router.post("/admin/login", login)
router.post("/admin/register", register)


module.exports = router;