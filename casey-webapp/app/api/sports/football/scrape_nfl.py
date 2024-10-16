import requests
from bs4 import BeautifulSoup

def scrape_nfl_schedule():
    # URL of the schedule page (example provided, but it's recommended to use the actual page)
    url = "https://www.nfl.com/schedule/"  # Replace with actual page URL
    response = requests.get(url)

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find the outer div with the schedule data
    outer_div = soup.find('div', attrs={"data-json-module": True})

    # Find all game sections within the outer div
    games = outer_div.find_all('div', class_='nfl-c-matchup-strip')

    # List to store game data
    schedule = []

    # Iterate over each game and extract the relevant information
    for game in games:
        teams = game.find_all('span', class_='nfl-c-matchup-strip__team-fullname')
        scores = game.find_all('div', class_='nfl-c-matchup-strip__team-score')
        time = game.find('span', class_='nfl-c-matchup-strip__date-time')
        
        # Ensure teams and scores are available
        if len(teams) == 2:
            team1 = teams[0].text.strip()
            team2 = teams[1].text.strip()
            
            score1 = scores[0].text.strip() if scores else "N/A"
            score2 = scores[1].text.strip() if scores else "N/A"
            
            game_time = time.text.strip() if time else "N/A"
            
            # Append the data to the schedule list
            schedule.append({
                'team1': team1,
                'score1': score1,
                'team2': team2,
                'score2': score2,
                'time': game_time
            })

    # Print the schedule data
    for game in schedule:
        print(f"{game['team1']} ({game['score1']}) vs {game['team2']} ({game['score2']}) at {game['time']}")

    return schedule

if __name__ == "__main__":
    scrape_nfl_schedule()
