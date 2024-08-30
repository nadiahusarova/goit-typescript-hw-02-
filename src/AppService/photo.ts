import axios from "axios";
import { Image } from "../types";

const API_KEY = "9vhbMiaLrWG-vmsc6FvETUigSWziqEPsqlj9Ebk_5bk";
const API_ID = "635199";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `${API_ID} ${API_KEY}`;
axios.defaults.params = {
  X_Per_Page: 15,
};

export const getPhotos = async (query: string, page: number): Promise<{ results: Image[]; total_pages: number }> => {
  const { data } = await axios.get(`/search/photos?query=${query}&page=${page}`);
  return data;
};
