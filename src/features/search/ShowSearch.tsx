import { useQuery } from "@tanstack/react-query"
import { Container } from "@mui/material"
import { filmService } from "@/features/search/api"
import type { Film } from "@/features/search/api"
import { SearchInput } from "@/features/search/ui"
import { useState } from "react"

export const ShowSearch = () => {
  const [inputValue, setInputValue] = useState('')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: () => filmService.getFilms(),
    staleTime: 1000 * 60 * 10
  })

  const {
    data: selectedFilm,
    isLoading: isSelectedFilmLoading,
    isError: selectedFilmError,
  } = useQuery({
    queryKey: ['details'],
    queryFn: () => filmService.getFilmByUrl('https://swapi.dev/api/films/1/'),
    staleTime: 1000 * 60 * 10,
  })

  const films = data?.results ?? []
  const normalizedInput = inputValue.trim().toLowerCase()
console.log(films)
  let filteredFilms: Film[] = []

  if (normalizedInput && films) {
    filteredFilms = films
      .filter((film) =>
          film.title.toLowerCase().includes(normalizedInput) ||
          film.opening_crawl.toLowerCase().includes(normalizedInput),
      )
      .slice(0, 6)
  }

  if (isLoading) {
    return (
      <Container>
        <div>Loading...</div>
      </Container>
    )
  }

  if (isError) {
    return (
      <Container>
        <div>Error occurred while fetching films</div>
      </Container>
    )
  }

  return (
    <Container>
      <div>{selectedFilm?.title}</div>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      {filteredFilms.map((film) => (
        <div key={film.title}>{film.title}</div>
      ))}
    </Container>
  )
}
