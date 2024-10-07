class Game:
    def __init__(self, date, away_team, home_team, week=None, time=None, away=None, home=None, 
                 away_score=None, home_score=None, qtr=None, clock=None, situation=None, 
                 pos=None, score=None, total_points=None, ou=None, odds=None, broadcast=None):
        self.date = date
        self.away_team = away_team
        self.home_team = home_team
        self.week = week
        self.time = time
        self.away = away
        self.home = home
        self.away_score = away_score
        self.home_score = home_score
        self.qtr = qtr
        self.clock = clock
        self.situation = situation
        self.pos = pos
        self.score = score
        self.total_points = total_points
        self.ou = ou
        self.odds = odds
        self.broadcast = broadcast

class Schedule:
    def __init__(self):
        self.games = []

    def add_game(self, game):
        self.games.append(game)