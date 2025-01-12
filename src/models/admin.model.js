const { Schema, model } = require("mongoose")






const adminSchema = new Schema({
    username: { type: String, required: true, unique: true }, // Telegram foydalanuvchi ID'si
    email: { type: String, unique: true },
    password: { type: String, unique: true },
    
  }, {
    timestamps: true, // Avtomatik createdAt va updatedAt
  })

  module.exports = model("Admin", adminSchema);