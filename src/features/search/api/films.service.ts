import axios from "axios";
import type { Film, FilmsResponse } from "@/features/search/api";

  const FILMS_URL = 'https://swapi.dev/api/films/';

  const getFilms = async (): Promise<FilmsResponse> => {
    const res = await axios.get<FilmsResponse>(FILMS_URL)
    return res.data;
  }

  const getFilmByUrl = async (url: string): Promise<Film> => {
    const res = await axios.get<Film>(url)
    return res.data
  }

export const filmService = { getFilms, getFilmByUrl };