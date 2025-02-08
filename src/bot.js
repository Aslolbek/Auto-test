const {Bot, InlineKeyboard} = require("grammy")

require('dotenv').config()

const TOKEN = '7984086859:AAHb7vedHGYgVUOf3kaSIukqaTHMysudpF8';
const bot = new Bot(TOKEN)

bot.command("start", async (ctx) => {
    try {
        const telegramId = ctx.from.id;
    const username = ctx.from.username;
    let user = await User.findOne({ telegramId });
    
      if (!user) {
        user = new User({ telegramId, username });
        await user.save();
        await ctx.reply("Menyuni tanlang:", {
            reply_markup: {
                keyboard: [
                    [ { text: "Mavzular" , web_app: { url: "https://172.26.208.1:2000/getsubject" }, }],
                    [ { text: "Obunani aktivlashtrish!" }],
                    [ { text: "Bot haqida!" }],
                ],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        });
      } else {
        await ctx.reply("Menyuni tanlang:", {
                    reply_markup: {
                        keyboard: [
                            [ { text: "Mavzular" , web_app: { url: "https://172.26.208.1:2000/getsubject" }, }],
                            [ { text: "Obunani aktivlashtrish!" }],
                            [ { text: "Bot haqida!" }],
                        ],
                        resize_keyboard: true,
                        one_time_keyboard: true,
                    },
                });
      }
    } catch (error) {
        console.log(error);
    }
    
  });


bot.on("message:text", async (ctx) => {
    try {
        
    const messageText = ctx.message.text;

    if (messageText === "Mavzular") {
        const response = await fetch(`http://localhost:2000/subject`, {
            method: "GET", // GET so'rovini yuborish
          });
    
          const text = await response.text(); // Ma'lumotni oddiy matn sifatida oling
console.log(text); 
    } else if (messageText === "Obunani aktivlashtrish!") {
        await ctx.reply("To'lov turini tanlang:", {
            reply_markup: {
                keyboard: [
                    [{ text: "PayMe" }, { text: "Click" }],
                    [ { text: "Ortga" }],
                ],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        });
    } else if(messageText === "Bot haqida!"){
        await ctx.reply("Телеграм Бот қандай қулайликларга эга? Назарий Имтихон Тест саволларини Мавзулар бўйича ўрганиш имконияти; Тест якунида синов натижасини кўриш имконияти; Агар хато жавоб танланган тақдирда ҳам, тўғри жавобни кўриш имконияти мавжуд! Тестларни ишлаш учун, аввал Обунани Активлаштириб олинг! Сизга Муваффақият тилаймиз!");
    }else if (messageText === "Ortga") {
        await ctx.reply("Menyuni tanlang:", {
            reply_markup: {
                keyboard: [
                    [ { text: "Mavzular" , web_app: { url: "https://172.20.10.5:2000/getsubject" }, }],
                    [ { text: "Obunani aktivlashtrish!" }],
                    [ { text: "Bot haqida!" }],
                ],
                resize_keyboard: true,
            },
        });
    } else if(messageText === "Atamalar") {
        await ctx.reply("Web App", {
            reply_markup: {
                keyboard: [
                    [{ text: "Open App", web_app: { url: "https://your-web-app-url.com" } }],
                    [{ text: "Open App", web_app: { url: "https://your-web-app-url.com" } }],
                    [{ text: "Open App", web_app: { url: "https://your-web-app-url.com" } }]
                ]
            }
        });
    }
    } catch (error) {
        console.log(error)
    }


});

bot.on("callback_query:data", async (ctx) => {
    const callbackData = ctx.callbackQuery.data;

    if (callbackData === "Bot Haqida") {
        await ctx.answerCallbackQuery();
        await ctx.reply("Bu yordam qismi!");
    } else if (callbackData === "settings_command") {
        await ctx.answerCallbackQuery();
        await ctx.reply("Bu sozlamalar qismi!");
    }
});


module.exports = bot;