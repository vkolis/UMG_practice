import { useQuery } from "@tanstack/react-query"
import { SearchInput } from "./ui/SearchInput"
import { Container } from "@mui/material"

export const ShowSearch = () => {
  const { data } = useQuery({
    queryKey: ['films'],
    queryFn: () => fetch('https://swapi.dev/api/films/').then(res => res.json())
  })
  console.log(data.results)
  return (
    <Container>
      <SearchInput inputValue={""} setInputValue={() => {}} />
      {data?.results.map((film: { title: string }) => (
        <div key={film.title}>{film.title}</div>
      ))}
    </Container>
  )
}
