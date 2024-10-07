import csv
import os
from dotenv import load_dotenv
from models.models import Schedule, Game

load_dotenv()

def get_nfl_schedule():
    # Construct the absolute path to the CSV file
    csv_file = f'{os.getenv("ASSETS_DIR")}/schedule_nfl_2024.csv'
    
    schedule = Schedule() 

    with open(csv_file, mode='r', newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            game = Game(
                week=row['Week'],
                date=row['Date'],
                time=row['Time'],
                away_team=row['Away Team'],
                away=row['Away'],
                home_team=row['Home Team'],
                home=row['Home'],
                away_score=row['Away Score'],
                home_score=row['Home Score'],
                qtr=row['Qtr'],
                clock=row['Clock'],
                situation=row['Situation'],
                pos=row['Pos'],
                score=row['Score'],
                total_points=row['Total Points'],
                ou=row['O/U'],
                odds=row['Odds'],
                broadcast=row['Broadcast']
            )
            schedule.add_game(game)

    return schedule

