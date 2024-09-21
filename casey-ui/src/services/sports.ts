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

// Function to fetch all sports
export const fetchSports = async (): Promise<Sport[]> => {
  try {
    const response = await axios.get<Sport[]>('/api/sports');
    return response.data;
  } catch (error) {
    console.error('Error fetching sports:', error);
    throw error;
  }
};

// Function to fetch a single sport by ID
export const fetchSportById = async (id: number): Promise<Sport> => {
  try {
    const response = await axios.get<Sport>(`/api/sports/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching sport with id ${id}:`, error);
    throw error;
  }
};

// Function to fetch teams by sport ID
export const fetchTeamsBySportId = async (sportId: number): Promise<Team[]> => {
  try {
    const response = await axios.get<Team[]>(`/api/sports/${sportId}/teams`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching teams for sport id ${sportId}:`, error);
    throw error;
  }
};

// Function to fetch players by team ID
export const fetchPlayersByTeamId = async (teamId: number): Promise<Player[]> => {
  try {
    const response = await axios.get<Player[]>(`/api/teams/${teamId}/players`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching players for team id ${teamId}:`, error);
    throw error;
  }
};

// Function to create a new sport
export const createSport = async (sportData: Omit<Sport, 'id'>): Promise<Sport> => {
  try {
    const response = await axios.post<Sport>('/api/sports', sportData);
    return response.data;
  } catch (error) {
    console.error('Error creating sport:', error);
    throw error;
  }
};

// Function to update an existing sport
export const updateSport = async (id: number, sportData: Partial<Sport>): Promise<Sport> => {
  try {
    const response = await axios.put<Sport>(`/api/sports/${id}`, sportData);
    return response.data;
  } catch (error) {
    console.error(`Error updating sport with id ${id}:`, error);
    throw error;
  }
};

// Function to delete a sport
export const deleteSport = async (id: number): Promise<void> => {
  try {
    await axios.delete(`/api/sports/${id}`);
  } catch (error) {
    console.error(`Error deleting sport with id ${id}:`, error);
    throw error;
  }
};
