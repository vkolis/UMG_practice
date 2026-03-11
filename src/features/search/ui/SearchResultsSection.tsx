import { Card, CardContent, Typography } from "@mui/material"
import type { Film } from "@/features/search/api"
import { SearchResultsList } from "@/features/search/ui"

type SearchResultsSectionProps = {
  normalizedInput: string
  filteredFilms: Film[]
  selectedFilmUrl: string
  handleFilmClick: (film: Film) => void
}

export const SearchResultsSection = ({
  normalizedInput,
  filteredFilms,
  selectedFilmUrl,
  handleFilmClick,
}: SearchResultsSectionProps) => {
  if (!normalizedInput) {
    return null
  }

  if (filteredFilms.length === 0) {
    return (
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardContent>
          <Typography>No films found</Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <SearchResultsList
      films={filteredFilms}
      selectedFilmUrl={selectedFilmUrl}
      onFilmClick={handleFilmClick}
    />
  )
}
