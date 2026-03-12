import { Card, CardContent } from "@mui/material"
import type { Film } from "@/features/search/api"
import { SearchResultsList } from "@/features/search/ui"
import { WarningAlert } from "./WarningAlert"

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
          <WarningAlert message="No films found" />
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
