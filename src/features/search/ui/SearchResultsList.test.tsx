import { renderToStaticMarkup } from "react-dom/server"
import type { Film } from "@/features/search/api"
import { SearchResultsList } from "./SearchResultsList"

const makeFilm = (overrides: Partial<Film>): Film => ({
  title: "A New Hope",
  episode_id: 4,
  opening_crawl: "It is a period of civil war.",
  director: "George Lucas",
  producer: "Gary Kurtz, Rick McCallum",
  release_date: "1977-05-25",
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  created: "2014-12-10T14:23:31.880000Z",
  edited: "2014-12-20T19:49:45.256000Z",
  url: "https://swapi.dev/api/films/1/",
  ...overrides,
})

describe("SearchResultsList", () => {
  it("renders nothing when films list is empty", () => {
    const html = renderToStaticMarkup(
      <SearchResultsList films={[]} selectedFilmUrl="" onFilmClick={vi.fn()} />,
    )

    expect(html).toBe("")
  })

  it("renders provided films with episode labels", () => {
    const html = renderToStaticMarkup(
      <SearchResultsList
        films={[
          makeFilm({ title: "A New Hope", episode_id: 4, url: "https://swapi.dev/api/films/1/" }),
          makeFilm({
            title: "The Empire Strikes Back",
            episode_id: 5,
            url: "https://swapi.dev/api/films/2/",
          }),
        ]}
        selectedFilmUrl=""
        onFilmClick={vi.fn()}
      />,
    )

    expect(html).toContain("A New Hope")
    expect(html).toContain("The Empire Strikes Back")
    expect(html).toContain("Episode 4")
    expect(html).toContain("Episode 5")
  })
})
