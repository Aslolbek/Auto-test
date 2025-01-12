const  express  = require("express")
require("dotenv").config()
const path = require("path")
const bot = require("./bot")
const bodyparser=require("body-parser")
const router = require("./routers")
const connectDB = require("./database/db")
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.set("view engine", "ejs")
app.set('views' , process.cwd() + "/src/views")

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(router);
connectDB()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`${PORT}  ishlamoqda...`)
})

bot.start()