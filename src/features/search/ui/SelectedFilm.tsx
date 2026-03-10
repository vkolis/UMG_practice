import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, Stack, Typography } from "@mui/material"
import { filmService } from "@/features/search/api"

type SelectedFilmProps = {
  selectedFilmUrl: string
}

export const SelectedFilm = ({ selectedFilmUrl }: SelectedFilmProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['details', selectedFilmUrl],
    queryFn: () => filmService.getFilmByUrl(selectedFilmUrl),
    enabled: Boolean(selectedFilmUrl),
    staleTime: 1000 * 60 * 10,
  })

  if (!selectedFilmUrl) {
    return null
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">Film details</Typography>

        {isLoading && <Typography>Loading details...</Typography>}

        {isError && (
          <Typography> Failed to load selected film </Typography>
        )}

        {data && (
          <Stack>
            <Typography>Title: {data.title}</Typography>
            <Typography>Episode: {data.episode_id}</Typography>
            <Typography>Director: {data.director}</Typography>
            <Typography>Producer: {data.producer}</Typography>
            <Typography>Release date: {data.release_date}</Typography>
            <Typography>Characters: {data.characters.length}</Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  )
}
