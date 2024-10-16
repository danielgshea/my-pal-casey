import { Leagues } from "../models/leagues";



// Fetch trending sports articles
export const fetchTrendingSports = async () => {
  try {
      const response = await fetch('http://localhost:8000/sports/trending');
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

export const fetchScrapedSportsSchedule = async (league: Leagues) => {
  try {
      const response = await fetch(`http://localhost:8000/sports/schedule/scraped/${league}`);
      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Error fetching scraped sports schedule:', error);
      return [];
  }
}

