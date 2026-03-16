import { useQuery } from "@tanstack/react-query"
import { Container, Stack } from "@mui/material"
import { styled } from "@mui/material/styles"
import { filmService, SEARCH_STALE_TIME } from "@/features/search/api"
import { useShowSearchState } from "@/shared/hooks/useShowSearchState"
import { ErrorAlert, Loading, SearchHistory, SearchInput, SearchResultsSection, SelectedFilm } from "@/features/search/ui"

const StatusContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(4),
}))

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
      <StatusContainer>
        <Loading />
      </StatusContainer>
    )
  }

  if (isError) {
    return (
      <StatusContainer>
        <ErrorAlert message='Failed to load films' />
      </StatusContainer>
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
