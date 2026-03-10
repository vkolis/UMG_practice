import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material"
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
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">Film details</Typography>

        {isLoading && <Typography>Loading details...</Typography>}

        {isError && (
          <Typography> Failed to load selected film </Typography>
        )}

        {data && (
          <List disablePadding dense>
            <ListItem disableGutters>
              <ListItemText primary="Title" secondary={data.title} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Episode" secondary={data.episode_id} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Director" secondary={data.director} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Producer" secondary={data.producer} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Release date" secondary={data.release_date} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Characters" secondary={data.characters.length} />
            </ListItem>
          </List>
        )}
      </CardContent>
    </Card>
  )
}
