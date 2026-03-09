import { useQuery } from "@tanstack/react-query"
import { SearchInput } from "./ui/SearchInput"
import { Container } from "@mui/material"
import { filmService } from "./api/films.service"

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
