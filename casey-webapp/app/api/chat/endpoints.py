from fastapi import APIRouter
from app.api.chat.chat import process_chat_message  # Assuming this function exists

chat_router = APIRouter()

@chat_router.post("/")
async def chat(message: str):
    return process_chat_message(message)
