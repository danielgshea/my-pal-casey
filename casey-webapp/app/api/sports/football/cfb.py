import requests
from datetime import date
from dotenv import load_dotenv
import os

load_dotenv()

API_KEY = os.getenv('CFBD_API_KEY')


def get_ncaacfb_schedule():
    today = date.today()
    year = today.year
    url = f'https://api.collegefootballdata.com/games?year={year}&classification=fbs&seasonType=regular'
    headers = {'Authorization': f'Bearer {API_KEY}'}
    response = requests.get(url, headers=headers)
    data = response.json()
    return data