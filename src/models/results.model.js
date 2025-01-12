const { Schema, model } = require("mongoose")

const resultSchema = new Schema({
        userId: { type: Schema.Types.ObjectId, ref: "user", required: true }, // Foydalanuvchi ID'si
        topicId: { type: Schema.Types.ObjectId, ref: "test", required: true }, // Test mavzusining ID'si
        correctAnswers: { type: Number, required: true }, // To'g'ri javoblar soni
        incorrectAnswers: { type: Number, required: true }, // Noto'g'ri javoblar soni
        result: { type: Number, required: true }, // Foiz yoki umumiy natija
  }, {
        timestamps: true, // Avtomatik createdAt va updatedAt
  })

  module.exports  = model("Result", resultSchema);

