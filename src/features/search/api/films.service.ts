import axios from "axios";
import type { Film, FilmsResponse } from "./films.types";

class FilmService {
  private baseUrl = 'https://swapi.dev/api/films/';

  async getFilms(): Promise<FilmsResponse> {
    const res = await axios.get<FilmsResponse>(this.baseUrl)
    return res.data;
  }

  async getFilmByUrl(url: string): Promise<Film> {
    const res = await axios.get<Film>(url)
    return res.data
  }
}

export const filmService = new FilmService();
