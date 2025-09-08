# FastAPI backend for Telegram Mini App
# Install dependencies: pip install fastapi uvicorn python-telegram-bot


from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
import os

app = FastAPI()


TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN", "AAEsnssOENGOH1n5ujqjzxjNv5IgOGuZmbk")
application = ApplicationBuilder().token(TELEGRAM_TOKEN).build()


# Example async command handler
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Hello from your FastAPI Telegram Mini App!")

application.add_handler(CommandHandler("start", start))


@app.post("/webhook")
async def telegram_webhook(request: Request):
    data = await request.json()
    update = Update.de_json(data, application.bot)
    await application.process_update(update)
    return JSONResponse({"status": "ok"})

@app.get("/ping")
def ping():
    return {"message": "pong"}
