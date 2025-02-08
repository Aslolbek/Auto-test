const { Router } = require("express")
const { openRegister, openLogin, register, login, adminPage } = require("../controllers/admin.controller")


const router = Router()

router.get("/login", openLogin)
router.get("/register", openRegister)
router.post("/admin/login", login)
router.post("/admin/register", register)
router.get('/admin-page', adminPage)


module.exports = router;