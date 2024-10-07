import axios from 'axios';

// Define the News interface
interface News {
  id: number;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
}

// Fetch trending news articles
export const fetchTrendingNews = async () => {
  try {
      const response = await fetch(`http://localhost:8000/news/trending`);
      const data = await response.json();
      console.log(data);
      const articles = data?.articles || [];
      return articles;
  } catch (error) {
      console.error('Error fetching news:', error);
      return [];
  }
};