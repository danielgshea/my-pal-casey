import requests
from datetime import date, timedelta

def get_todays_date():
    return date.today()


def get_trending_searches(topic):
    
    url = ('https://newsapi.org/v2/everything?'
       f'q={topic}&'
       f'from={get_todays_date() - timedelta(days=2)}&'
       'sortBy=popularity&'
       'apiKey=bb71ccb11a9243ebaa6a3315fedf8182')
    response = requests.get(url)
    return response.json()
