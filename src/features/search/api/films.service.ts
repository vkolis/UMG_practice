import axios from "axios";
import type { FilmsResponse } from "./films.types";

class FilmService {
  private baseUrl = 'https://swapi.dev/api/films/';

  async getFilms(): Promise<FilmsResponse> {
    const res = await axios.get<FilmsResponse>(this.baseUrl)
    return res.data;
  }
}

export const filmService = new FilmService();