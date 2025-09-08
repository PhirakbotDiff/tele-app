
from telegram import Update, KeyboardButton, ReplyKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes, MessageHandler, filters


# Replace this with your actual bot token from BotFather
BOT_TOKEN = "AAEsnssOENGOH1n5ujqjzxjNv5IgOGuZmbk"

# Replace with your actual deployed webapp URL
WEBAPP_URL = "https://your-server.com/webapp/index.html"


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    
    keyboard = [
        [KeyboardButton("Open Mini App", web_app=WebAppInfo(url=WEBAPP_URL))]
    ]
    reply_markup = ReplyKeyboardMarkup(keyboard, resize_keyboard=True)
    await update.message.reply_text(
        "Welcome! Click the button below to open the Mini App.",
        reply_markup=reply_markup
    )


async def webapp_data(update: Update, context: ContextTypes.DEFAULT_TYPE):
    data = update.message.web_app_data.data
    await update.message.reply_text(f"Received from Mini App: {data}")


if __name__ == "__main__":
    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, webapp_data))
    print("Bot is running. Press Ctrl+C to stop.")
    app.run_polling()
