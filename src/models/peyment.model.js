const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Payment Schema
const PaymentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Foydalanuvchi bilan bog'lanadi
  amount: { type: Number, required: true }, // Tolov summasi
  paymentMethod: { type: String, required: true }, // Tolov usuli (masalan, 'click', 'payme', 'card')
  status: { 
    type: String, 
    enum: ["pending", "completed", "failed"], 
    default: "pending" 
  }, // Tolov holati
  transactionId: { type: String, unique: true, required: true }, // Unikal tranzaksiya ID
  createdAt: { type: Date, default: Date.now }, // Tolov vaqti
});

module.exports = model("Payment", PaymentSchema);
