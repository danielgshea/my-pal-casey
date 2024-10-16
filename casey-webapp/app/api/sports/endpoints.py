from fastapi import APIRouter
from app.api.sports.sports import get_trending_sports_articles
from app.api.sports.football.nfl import get_nfl_schedule, get_nfl_schedule_scraper
from app.api.sports.football.cfb import get_ncaacfb_schedule
sports_router = APIRouter()

@sports_router.get("/")
async def sports():
    return {"message": "Sports endpoint accessed"}

@sports_router.get("/trending")
async def trending():
    return get_trending_sports_articles()

@sports_router.get("/schedule/{league}")
async def schedule(league: str):
    if league == "nfl":
        return get_nfl_schedule()
    elif league == "cfb":
        return get_ncaacfb_schedule()
    else:
        return {"message": "League not supported"}
    
@sports_router.get("/schedule/scraped/{league}")
async def scraped_schedule(league: str):
    if league == "nfl":
        return get_nfl_schedule_scraper()
    else:
        return {"message": "League not supported"}

