const { Router } = require("express");
const { testSubmit, testCreate, testList, testPage } = require("../controllers/test.controller");

const router = Router()


router.get("/test", testPage)
router.get("/testlist/:topicId", testList)
router.post("/submit-test", testCreate);

module.exports = router;