import { useQuery } from "@tanstack/react-query"
import { Container, Stack } from "@mui/material"
import { filmService } from "@/features/search/api"
import { useShowSearchState } from "@/shared/hooks/useShowSearchState"
import { ErrorAlert, Loading, SearchHistory, SearchInput, SearchResultsList, SelectedFilm } from "@/features/search/ui"

const STALE_TIME = 1000 * 60 * 10 // 10 minutes

export const ShowSearch = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: () => filmService.getFilms(),
    staleTime: STALE_TIME,
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
      {isError && <ErrorAlert message='Failed to load films' />}
      {isLoading ? (
        <Loading />
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
