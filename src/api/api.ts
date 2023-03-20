import { MAX_RESULTS } from "./../constants/constants";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});
export const booksAPI = {
  getBooks(
    search: string,
    activeCategory: string,
    sort: string,
    currentPage: string
  ) {
    const startIndex = MAX_RESULTS * Number(currentPage);
    return instance.get(
      `volumes?q=${
        search ? search : "%27%27"
      }+subject:${activeCategory}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=${
        process.env.REACT_APP_API_KEY
      }`
    );
  },
};
