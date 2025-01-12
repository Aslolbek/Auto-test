const subjectModel = require("../models/subject.model")

const Subject = async (req, res) =>{
    try {
        res.render("add-topic")
    } catch (error) {
        console.log(error)
    }
}

const subjectAll = async (req, res) => {
    try {
        const topics = await subjectModel.find(); // Bazadan mavzularni olish
        // console.log(topics)
        res.render("view-topics", { topics });
    } catch (error) {
        res.status(500).json({ message: "Xatolik yuz berdi!" });
    }
};

const subjectCreate = async (req, res) => {
    try {
        const { name } = req.body;
        console.log(req.body)
        const newTopic = new subjectModel({ name: name });
        await newTopic.save();
        res.json({ success: true });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    Subject,
    subjectCreate,
    subjectAll
}