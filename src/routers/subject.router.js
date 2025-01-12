const { Router } = require("express");
const { Subject, subjectCreate, subjectAll } = require("../controllers/subject.controller");


const router = Router()


router.get("/subject", Subject)
router.get("/getsubject", subjectAll)
router.post("/subject-create", subjectCreate)


module.exports = router;