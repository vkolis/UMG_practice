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
import { useRef, useState } from "react"

type SearchHistoryItem = {
  id: number
  url: string
  title: string
}

export const ShowSearch = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectedFilmUrl, setSelectedFilmUrl] = useState<string>('')
  const [history, setHistory] = useState<SearchHistoryItem[]>([])
  const historyIdRef = useRef(0)

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
    setSelectedFilmUrl(film.url)

    setHistory((prev) => {
      historyIdRef.current += 1
      return [...prev, { id: historyIdRef.current, url: film.url, title: film.title }].slice(-5)
    })
  }

  const handleInputValueChange = (value: string) => {
    setInputValue(value)

    if (value.trim() === '') {
      setSelectedFilmUrl('')
    }
  }

  return (
    <Container>
        {isError && <Typography>Failed to load films</Typography>}
        {isLoading ? <Typography>Loading...</Typography> :
          <Stack >
            <SearchHistory 
              items={history}
              onDelete={(id) => setHistory((prev) => prev.filter((f) => f.id !== id))}
              onSelect={(url) => setSelectedFilmUrl(url)}
            />
                        
            <SearchInput inputValue={inputValue} setInputValue={handleInputValueChange} />

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
