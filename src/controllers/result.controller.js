const resultModel = require("../models/results.model")
const submitResult = async (req, res) => {
    try {
        const { userId, topicId, correctAnswers, incorrectAnswers, result } = req.body;

        const newResult = new resultModel({
            userId,
            topicId,
            correctAnswers,
            incorrectAnswers,
            result
        });

        await newResult.save();
        res.status(200).json({ message: "Natija muvaffaqiyatli saqlandi!" });
    } catch (error) {
        res.status(500).json({error});
    }
};

module.exports = {
    submitResult
}
