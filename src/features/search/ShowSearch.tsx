import { useQuery } from "@tanstack/react-query"
import { Container, Stack, Typography } from "@mui/material"
import { filmService } from "@/features/search/api"
import { useShowSearchState } from "@/shared/hooks/useShowSearchState"
import { SearchHistory, SearchInput, SearchResultsList, SelectedFilm } from "@/features/search/ui"

export const ShowSearch = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: () => filmService.getFilms(),
    staleTime: 1000 * 60 * 10,
  })

  const films = data?.results ?? []
  const {
    inputValue,
    normalizedInput,
    filteredFilms,
    selectedFilmUrl,
    history,
    handleFilmClick,
    handleInputValueChange,
    handleHistoryDelete,
    handleHistorySelect,
  } = useShowSearchState({ films })

  return (
    <Container>
      {isError && <Typography>Failed to load films</Typography>}
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Stack>
          <SearchHistory items={history} onDelete={handleHistoryDelete} onSelect={handleHistorySelect} />

          <SearchInput inputValue={inputValue} setInputValue={handleInputValueChange} />

          {normalizedInput && (
            <SearchResultsList
              films={filteredFilms}
              selectedFilmUrl={selectedFilmUrl}
              onFilmClick={handleFilmClick}
            />
          )}

          <SelectedFilm selectedFilmUrl={selectedFilmUrl} />
        </Stack>
      )}
    </Container>
  )
}
