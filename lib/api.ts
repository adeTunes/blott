import axios from "axios";

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Types for the API responses
export interface MarketNewsItem {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

// API service functions
export const newsApi = {
  // Get market news
  getMarketNews: async (): Promise<MarketNewsItem[]> => {
    const response = await apiClient.get<MarketNewsItem[]>("/news");
    return response.data;
  },
};

// Export the axios instance for direct use if needed
export default apiClient;
