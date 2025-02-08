const { Router } = require("express");
const { subjectCreate, subjectAll, subjectPage, subjects, deleteSubject } = require("../controllers/subject.controller");


const router = Router()


router.get("/subject", subjectPage)
router.get("/getsubject", subjects)
router.get("/admin/subject/all", subjectAll)
router.post("/subject-create", subjectCreate)
router.delete('/subject/delete/:id', deleteSubject)


module.exports = router;