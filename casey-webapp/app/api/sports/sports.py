import requests
from datetime import date, timedelta
import os
from dotenv import load_dotenv

load_dotenv()
NEWS_API_KEY = os.getenv('NEWS_APY_KEY')

def get_todays_date():
    return date.today()


def get_trending_teams():
    url = ('https://newsapi.org/v2/everything?'
       'q=sports teams&'
       f'from={get_todays_date() - timedelta(days=2)}&'
       'sortBy=popularity&'
       f'apiKey={NEWS_API_KEY}')
    response = requests.get(url)
    data = response.json()
    
    # Extract top 5 trending teams
    trending_teams = [
        article['title'].split(':')[0]  # Assuming the title format is "Team: News"
        for article in data.get('articles', [])[:5]
    ]

    return trending_teams

def get_trending_players():
    url = ('https://newsapi.org/v2/everything?'
       'q=sports players&'
       f'from={get_todays_date() - timedelta(days=2)}&'
       'sortBy=popularity&'
       f'apiKey={NEWS_API_KEY}')
    response = requests.get(url)
    data = response.json()
    
    # Extract top 5 trending players
    trending_players = [
        article['title'].split(':')[0]  # Assuming the title format is "Player: News"
        for article in data.get('articles', [])[:5]
    ]

    return trending_players

def get_trending_leagues():
    url = ('https://newsapi.org/v2/everything?'
       'q=sports leagues&'
       f'from={get_todays_date() - timedelta(days=2)}&'
       'sortBy=popularity&'
       f'apiKey={NEWS_API_KEY}')
    response = requests.get(url)
    data = response.json()
    
    # Extract top 5 trending leagues
    trending_leagues = [
        article['title'].split(':')[0]  # Assuming the title format is "League: News"
        for article in data.get('articles', [])[:5]
    ]

    return trending_leagues
