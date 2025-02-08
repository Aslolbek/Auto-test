const { Schema, model } = require("mongoose")


const UserSchema = new Schema({
    telegramId: { type: String, required: true, unique: true }, // Telegram foydalanuvchi ID'si
    username: { type: String, unique: true },
    role:{
      type: String,
      delete: 'user'
    }
  }, {
    timestamps: true, // Avtomatik createdAt va updatedAt
  });
  
  module.exports = model('User', UserSchema);