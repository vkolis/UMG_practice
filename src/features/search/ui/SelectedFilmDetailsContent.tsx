import { List, ListItem, ListItemText } from "@mui/material"
import type { Film } from "@/features/search/api"

export const SelectedFilmDetailsContent = ({ film }: { film: Film }) => {
  const items = [
    { label: "Title", value: film.title },
    { label: "Episode", value: film.episode_id },
    { label: "Director", value: film.director },
    { label: "Producer", value: film.producer },
    { label: "Release date", value: film.release_date },
    { label: "Characters", value: film.characters.length },
  ]

  return (
    <List >
      {items.map((item) => (
        <ListItem key={item.label}>
          <ListItemText primary={item.label} secondary={item.value} />
        </ListItem>
      ))}
    </List>
  )
}