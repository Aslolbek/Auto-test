const { Schema, model } = require("mongoose")


const TestSchema = new Schema({
    topic: { type: Schema.Types.ObjectId,ref: "subject",  required: true }, // Test mavzusi ID-si
    question: { type: String, required: true }, // Test savoli
    options: { type: [String], required: true }, // 4 ta variant
    correctAnswer: { type: Number, required: true }, // To'g'ri javobning index raqami (0-3)
  }, {
    timestamps: true, // createdAt va updatedAt
  })

  module.exports = model("Test", TestSchema);