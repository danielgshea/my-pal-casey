from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.logging import logger
from app.api.sports.endpoints import sports_router
from app.api.news.endpoints import news_router
from app.api.chat.endpoints import chat_router

app = FastAPI()

# Set up CORS
origins = [
    "http://localhost:3000",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.get("/")
async def root():
    logger.info("Root endpoint accessed")
    return {"message": "Hello, Casey!"}

app.include_router(sports_router, prefix="/sports")
app.include_router(news_router, prefix="/news")
app.include_router(chat_router, prefix="/chat")
