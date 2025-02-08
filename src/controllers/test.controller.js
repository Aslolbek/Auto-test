const subjectModel = require("../models/subject.model");
const testModel = require("../models/test.model")


const testList = async (req, res) =>{
    try {
        const topicId = req.params.topicId;
        console.log(topicId);
        const tests = await testModel.find({ topic: `${topicId}` });
        res.render("quiz-session", {tests, topicId})
    } catch (error) {
        
    }
}

const testPage = async (req, res) =>{
    try {
        const subjects = await subjectModel.find()
        res.render("create-test", { subjects })
    } catch (error) {
        console.log(error)
    }
}


const testCreate = async (req, res) => {
    try {
        const { topic, question, options, correctAnswer } = req.body;
        const newTest = new testModel({
            topic: topic, // Test mavzusi
            question: question, // Test savoli
            options: options, // Variantlar
            correctAnswer: correctAnswer, // To'g'ri javob
        });
        // Bazaga saqlash
        await newTest.save();

        res.status(200).json({ message: 'Test muvaffaqiyatli qo\'shildi!' });
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    testList,
    testPage,
    testCreate
}