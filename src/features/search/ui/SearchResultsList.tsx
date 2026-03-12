import { Card, CardContent, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import type { Film } from "@/features/search/api"

type SearchResultsListProps = {
  films: Film[]
  selectedFilmUrl: string
  onFilmClick: (film: Film) => void
}

export const SearchResultsList = ({
  films,
  selectedFilmUrl,
  onFilmClick,
}: SearchResultsListProps) => {
  if (films.length === 0) {
    return null
  }

  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent>
        <List disablePadding>
          {films.map((film) => (
            <ListItem key={film.url} disablePadding>
              <ListItemButton
                sx={{ px: 4 }}
                selected={selectedFilmUrl === film.url}
                onClick={() => onFilmClick(film)}
              >
                <ListItemText primary={film.title} secondary={`Episode ${film.episode_id}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
