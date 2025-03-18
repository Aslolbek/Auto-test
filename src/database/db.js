const { connect } = require("mongoose")

const db = process.env.DB
async function connectDB() {
    try {
        await connect(`mongodb+srv://asrorabdimannonov363:<n2GlcS0SGzMq5WY1>@mycluster.agbfq.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("MongoDB ulanish muvaffaqiyatli!");
    } catch (error) {
        console.error("MongoDB ulanishda xatolik:", error);
    }
}

module.exports = connectDB

