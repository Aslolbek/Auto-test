const { Schema , model } = require("mongoose")


const subjectSchema = new Schema({
    name: { type: String, required: true },
}, {
    timestamps: true, // createdAt va updatedAt
  })

  module.exports = model('Subject', subjectSchema);