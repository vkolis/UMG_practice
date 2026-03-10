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
import { SearchHistory, SearchInput, SelectedFilm } from "@/features/search/ui"
import { useState } from "react"

export const ShowSearch = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectedFilmUrl, setSelectedFilmUrl] = useState<string>('')
  const [history, setHistory] = useState<Array<{ url: string; title: string }>>([]);

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

  const handleFilmClick = (film: Film) => {
  setSelectedFilmUrl(film.url);

  setHistory((prev) => {
    const withoutCurrent = prev.filter((f) => f.url !== film.url);
    return [{ url: film.url, title: film.title }, ...withoutCurrent].slice(0, 5);
  });
  };

  return (
    <Container>
        {isError && <Typography>Failed to load films</Typography>}
        {isLoading ? <Typography>Loading...</Typography> :
          <Stack >
            <SearchHistory 
              items={history}
              onDelete={(url) => setHistory((prev) => prev.filter((f) => f.url !== url))}
              onSelect={(url) => setSelectedFilmUrl(url)}
            />
                        
            <SearchInput inputValue={inputValue} setInputValue={setInputValue} />

            {!isLoading && !isError && normalizedInput && filteredFilms.length > 0 && (
              <Card variant="outlined" sx={{ mt: 2 }}>
                <CardContent >
                  <List>
                    {filteredFilms.map((film) => (
                      <ListItem key={film.url} >
                        <ListItemButton
                          selected={selectedFilmUrl === film.url}
                          onClick={() => handleFilmClick(film)}
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
