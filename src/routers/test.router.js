const { Router } = require("express");
const { testSubmit, testCreate, testList } = require("../controllers/test.controller");

const router = Router()


router.get("/testlist/:topicId", testList)
router.get("/test", testSubmit)
router.post("/submit-test", testCreate);

module.exports = router;