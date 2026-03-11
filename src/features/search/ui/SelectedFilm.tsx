import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, Container, Typography } from "@mui/material"
import { filmService, SEARCH_STALE_TIME } from "@/features/search/api"
import { Loading } from "./Loading"
import { ErrorAlert } from "./ErrorAlert"
import { SelectedFilmDetailsContent } from "./SelectedFilmDetailsContent"

type SelectedFilmProps = {
  selectedFilmUrl: string
}

export const SelectedFilm = ({ selectedFilmUrl }: SelectedFilmProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["details", selectedFilmUrl],
    queryFn: () => filmService.getFilmByUrl(selectedFilmUrl),
    enabled: Boolean(selectedFilmUrl),
    staleTime: SEARCH_STALE_TIME,
  })

  if (!selectedFilmUrl) {
    return null
  }

  const renderContent = () => {
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
          <ErrorAlert message="Failed to load selected film" />
        </Container>
      )
    }

    if (!data) {
      return null
    }

    return <SelectedFilmDetailsContent film={data} />
  }

  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">Film details</Typography>
        {renderContent()}
      </CardContent>
    </Card>
  )
}
