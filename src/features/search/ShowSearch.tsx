import { useQuery } from "@tanstack/react-query"
import { Container } from "@mui/material"
import { filmService } from "@/features/search/api"
import { SearchInput } from "@/features/search/ui"

export const ShowSearch = () => {
  const { data } = useQuery({
    queryKey: ['films'],
    queryFn: () => filmService.getFilms()
  })
  
  return (
    <Container>
      <SearchInput inputValue={""} setInputValue={() => {}} />
      {data?.results.map((film: { title: string }) => (
        <div key={film.title}>{film.title}</div>
      ))}
    </Container>
  )
}
