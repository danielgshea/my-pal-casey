from fastapi import APIRouter
from app.api.news.news import get_trending_news_articles

news_router = APIRouter()

@news_router.get("/")
async def news():
    return {"message": "News endpoint accessed"}

@news_router.get("/trending")
async def trending():
    return get_trending_news_articles()