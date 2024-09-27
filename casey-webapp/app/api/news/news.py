import requests
from datetime import date, timedelta

def get_todays_date():
    return date.today()


def get_trending_stories():
    url = ('https://newsapi.org/v2/everything?'
       'q=news stories&'
       f'from={get_todays_date() - timedelta(days=2)}&'
       'sortBy=popularity&'
       'apiKey=bb71ccb11a9243ebaa6a3315fedf8182')
    response = requests.get(url)
    data = response.json()
    if 'articles' in data:
        data['articles'] = [article for article in data['articles'] if article.get('urlToImage') is not None]
    return data

def get_trending_people():
    url = ('https://newsapi.org/v2/everything?'
       'q=famous people&'
       f'from={get_todays_date() - timedelta(days=2)}&'
       'sortBy=popularity&'
       'apiKey=bb71ccb11a9243ebaa6a3315fedf8182')
    response = requests.get(url)
    data = response.json()
    if 'articles' in data:
        data['articles'] = [article for article in data['articles'] if article.get('urlToImage') is not None]
    return data

def get_trending_places():
    url = ('https://newsapi.org/v2/everything?'
       'q=popular locations&'
       f'from={get_todays_date() - timedelta(days=2)}&'
       'sortBy=popularity&'
       'apiKey=bb71ccb11a9243ebaa6a3315fedf8182')
    response = requests.get(url)
    data = response.json()
    if 'articles' in data:
        data['articles'] = [article for article in data['articles'] if article.get('urlToImage') is not None]
    return data
