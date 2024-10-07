import requests
from datetime import date, timedelta
import os
from dotenv import load_dotenv

load_dotenv()
NEWS_API_KEY = os.getenv('NEWS_APY_KEY')

def get_todays_date():
    return date.today()


def get_trending_news_articles():
    
    url = ('https://newsapi.org/v2/everything?'
       f'q=trending&'
       f'from={get_todays_date() - timedelta(days=2)}&'
       'sortBy=popularity&'
       f'apiKey={NEWS_API_KEY}')
    response = requests.get(url)
    data = response.json()
    if 'articles' in data:
        data['articles'] = [article for article in data['articles'] if article.get('urlToImage') is not None]

    return data