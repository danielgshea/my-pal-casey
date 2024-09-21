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

// Function to fetch all news
export const fetchNews = async (): Promise<News[]> => {
  try {
    const response = await axios.get<News[]>('/api/news');
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// Function to fetch a single news item by ID
export const fetchNewsById = async (id: number): Promise<News> => {
  try {
    const response = await axios.get<News>(`/api/news/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news with id ${id}:`, error);
    throw error;
  }
};

// Function to fetch news by category
export const fetchNewsByCategory = async (category: string): Promise<News[]> => {
  try {
    const response = await axios.get<News[]>(`/api/news/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching news for category ${category}:`, error);
    throw error;
  }
};

// Function to create a new news item
export const createNews = async (newsData: Omit<News, 'id'>): Promise<News> => {
  try {
    const response = await axios.post<News>('/api/news', newsData);
    return response.data;
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
};

// Function to update an existing news item
export const updateNews = async (id: number, newsData: Partial<News>): Promise<News> => {
  try {
    const response = await axios.put<News>(`/api/news/${id}`, newsData);
    return response.data;
  } catch (error) {
    console.error(`Error updating news with id ${id}:`, error);
    throw error;
  }
};

// Function to delete a news item
export const deleteNews = async (id: number): Promise<void> => {
  try {
    await axios.delete(`/api/news/${id}`);
  } catch (error) {
    console.error(`Error deleting news with id ${id}:`, error);
    throw error;
  }
};
