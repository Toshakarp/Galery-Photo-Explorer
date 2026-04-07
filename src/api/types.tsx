export interface IImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };

  alt_description: string | null; //Union Type
}

export interface IUnsplashResponse {
  total_pages: number;
  results: IImage[];
}

export interface ICategory {
  title: string;
  coverUrl: string;
}
