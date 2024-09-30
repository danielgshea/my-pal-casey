import axios from "axios";

// Define the Sport interface
interface Sport {
  id: number;
  name: string;
  description: string;
  popularityRank: number;
}

// Define the Team interface
interface Team {
  id: number;
  name: string;
  sportId: number;
  city: string;
  country: string;
}

// Define the Player interface
interface Player {
  id: number;
  name: string;
  teamId: number;
  position: string;
  jerseyNumber: number;
}

type Leagues = "nfl" | "nba" | "mlb" | "nhl" | "mls" | "wnba" | "ncaacfb";


// Fetch trending sports articles
export const fetchTrendingSports = async () => {
  try {
      const response = await fetch('http://localhost:8000/trending/sports');
      const data = await response.json();
      console.log(data);
      const articles = data?.articles || [];
      return articles;
  } catch (error) {
      console.error('Error fetching news:', error);
      return [];
  }
};

// Fetch sports leagues
export const fetchSportsSchedule = async (league: Leagues) => {
  try {
      const response = await fetch(`http://localhost:8000/sports/schedule/${league}`);
      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Error fetching sports:', error);
      return [];
  }
};


