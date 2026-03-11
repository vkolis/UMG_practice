import { useQuery } from "@tanstack/react-query"
import { Container, Stack } from "@mui/material"
import { filmService, SEARCH_STALE_TIME } from "@/features/search/api"
import { useShowSearchState } from "@/shared/hooks/useShowSearchState"
import { ErrorAlert, Loading, SearchHistory, SearchInput, SearchResultsSection, SelectedFilm } from "@/features/search/ui"

export const ShowSearch = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: () => filmService.getFilms(),
    staleTime: SEARCH_STALE_TIME,
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


  if (isLoading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Loading />
      </Container>
    )
  }

  if (isError) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <ErrorAlert message='Failed to load films' />
      </Container>
    )
  }

  return (
    <Container>
      <Stack>
        <SearchHistory 
          items={history} 
          onDelete={handleHistoryDelete} 
          onSelect={handleHistorySelect} 
        />

        <SearchInput 
          inputValue={inputValue} 
          setInputValue={handleInputValueChange} 
        />

        <SearchResultsSection
          normalizedInput={normalizedInput}
          filteredFilms={filteredFilms}
          selectedFilmUrl={selectedFilmUrl}
          handleFilmClick={handleFilmClick}
        />

        <SelectedFilm selectedFilmUrl={selectedFilmUrl} />
      </Stack>
    </Container>
  )
}
