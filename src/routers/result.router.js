const { Router } = require("express");
const { submitResult } = require("../controllers/result.controller");

const router = Router()


router.post("/submit-result", submitResult)

module.exports = router;