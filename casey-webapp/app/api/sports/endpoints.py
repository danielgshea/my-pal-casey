from fastapi import APIRouter
from app.api.sports.sports import get_trending_sports_articles, get_sports_schedule

sports_router = APIRouter()

@sports_router.get("/")
async def sports():
    return {"message": "Sports endpoint accessed"}

@sports_router.get("/trending")
async def trending():
    return get_trending_sports_articles()

@sports_router.get("/schedule/{league}")
async def schedule(league: str):
    return get_sports_schedule(league)

