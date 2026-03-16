import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, Container, Typography } from "@mui/material"
import { filmService, SEARCH_STALE_TIME } from "@/features/search/api"
import { Loading } from "./Loading"
import { ErrorAlert } from "./ErrorAlert"
import { SelectedFilmDetailsContent } from "./SelectedFilmDetailsContent"
import { styled } from "@mui/material/styles"

type SelectedFilmProps = {
  selectedFilmUrl: string
}

const SelectedFilmContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(4),
}))

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
        <SelectedFilmContainer>
          <Loading />
        </SelectedFilmContainer>
      )
    }

    if (isError) {
      return (
        <SelectedFilmContainer>
          <ErrorAlert message="Failed to load selected film" />
        </SelectedFilmContainer>
      )
    }

    if (!data) {
      return null
    }

    return <SelectedFilmDetailsContent film={data} />
  }

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">Film details</Typography>
        {renderContent()}
      </CardContent>
    </Card>
  )
}
