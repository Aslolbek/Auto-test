const { connect } = require("mongoose")

async function connectDB() {
    try {
        await connect(`mongodb://127.0.0.1:27017/avtoexam`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("MongoDB ulanish muvaffaqiyatli!");
    } catch (error) {
        console.error("MongoDB ulanishda xatolik:", error);
    }
}

module.exports = connectDB

