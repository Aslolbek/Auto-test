const { connect } = require("mongoose")

const db = process.env.DB
async function connectDB() {
    try {
        await connect(`${db}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("MongoDB ulanish muvaffaqiyatli!");
    } catch (error) {
        console.error("MongoDB ulanishda xatolik:", error);
    }
}

module.exports = connectDB

