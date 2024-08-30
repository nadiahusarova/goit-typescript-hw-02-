export interface Image {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description?: string;
  }
  
  
  interface Urls {
    full: string;
    regular: string;
    small: string;
  }
  