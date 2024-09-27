from fastapi import FastAPI
from app.api.news.news import get_trending_stories, get_trending_people, get_trending_places
from app.api.sports.sports import get_trending_teams, get_trending_players, get_trending_leagues
from app.api.trends.trends import get_trending_searches
from fastapi.middleware.cors import CORSMiddleware



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
    return {"message": "Hello, Casey!"}

@app.get("/trending/news")
async def news():
    return get_trending_searches(topic='news')

@app.get("/trending/sports")
async def sports():
    return get_trending_searches(topic='sports')

@app.get("/news/people")
async def people():
    return get_trending_people()

@app.get("/news/places")
async def places():
    return get_trending_places()

@app.get("/news/stories")
async def stories():
    return get_trending_stories()

@app.get("/sports/teams")
async def teams():
    return get_trending_teams()

@app.get("/sports/players")
async def players():
    return get_trending_players()

@app.get("/sports/leagues")
async def leagues():
    return get_trending_leagues()




