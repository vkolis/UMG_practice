import { useQuery } from "@tanstack/react-query"
import { Button, Container, Stack, Typography } from "@mui/material"
import { filmService } from "@/features/search/api"
import type { Film } from "@/features/search/api"
import { SearchInput, SelectedFilm } from "@/features/search/ui"
import { useState } from "react"

export const ShowSearch = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectedFilmUrl, setSelectedFilmUrl] = useState<string>('')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: () => filmService.getFilms(),
    staleTime: 1000 * 60 * 10
  })

  const films = data?.results ?? []
  const normalizedInput = inputValue.trim().toLowerCase()

  let filteredFilms: Film[] = []

  if (normalizedInput) {
    filteredFilms = films
      .filter((film) =>
          film.title.toLowerCase().includes(normalizedInput) ||
          film.opening_crawl.toLowerCase().includes(normalizedInput),
      )
      .slice(0, 6)
  }

  return (
    <Container>
        {isError && <Typography>Failed to load films</Typography>}

        {isLoading ? <Typography>Loading...</Typography> : 
        
        <Stack spacing={2}>
          <SearchInput inputValue={inputValue} setInputValue={setInputValue} />

          {filteredFilms.map((film) => (
            <Button
              key={film.url}
              variant={selectedFilmUrl === film.url ? "contained" : "outlined"}
              onClick={() => setSelectedFilmUrl(film.url)}
            >
              {film.title}
            </Button>
          ))}

          <SelectedFilm selectedFilmUrl={selectedFilmUrl} />
        </Stack>
      }
    </Container>
  )
}
