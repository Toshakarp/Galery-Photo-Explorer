import { IUnsplashResponse } from './types';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const searchImagesRequest = async (query: string, page: number = 1, orderBy: string = 'relevant'): Promise<IUnsplashResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/search/photos?query=${query}&page=${page}&per_page=9&order_by=${orderBy}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data: IUnsplashResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch images from Unsplash:', error);

    throw error;
  }
};
