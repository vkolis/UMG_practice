import { useQuery } from "@tanstack/react-query"
import {
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"
import { filmService } from "@/features/search/api"
import type { Film } from "@/features/search/api"
import { useDebounce } from "@/shared/hooks"
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
  const debouncedInputValue = useDebounce(inputValue, 400)
  const normalizedInput = debouncedInputValue.trim().toLowerCase()

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
          <Stack >
            <SearchInput inputValue={inputValue} setInputValue={setInputValue} />

            {!isLoading && !isError && normalizedInput && filteredFilms.length > 0 && (
              <Card variant="outlined" sx={{ mt: 2 }}>
                <CardContent >
                  <List>
                    {filteredFilms.map((film) => (
                      <ListItem key={film.url} >
                        <ListItemButton
                          selected={selectedFilmUrl === film.url}
                          onClick={() => setSelectedFilmUrl(film.url)}
                        >
                          <ListItemText
                            primary={film.title}
                            secondary={`Episode ${film.episode_id}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            )}

            {!isLoading && !isError && (
              <SelectedFilm selectedFilmUrl={selectedFilmUrl} />
            )}
          </Stack>
      }
    </Container>
  )
}
