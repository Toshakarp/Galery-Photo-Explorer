import { IUnsplashResponse, IImage } from './types';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

async function fetchFromUnsplash<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error('Failed to fetch images from Unsplash:', error);

    throw error;
  }
}

export const searchImagesRequest = async (query: string, page: number = 1, orderBy: string = 'relevant'): Promise<IUnsplashResponse> => {
  return fetchFromUnsplash<IUnsplashResponse>(`/search/photos?query=${query}&page=${page}&per_page=9&order_by=${orderBy}`);
};

export const getRandomImagesRequest = async (page: number = 1): Promise<IImage[]> => {
  return fetchFromUnsplash<IImage[]>(`/photos?page=${page}&per_page=9`);
};
