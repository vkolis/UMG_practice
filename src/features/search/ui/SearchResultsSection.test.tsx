import { renderToStaticMarkup } from "react-dom/server"
import type { Film } from "@/features/search/api"
import { SearchResultsSection } from "@/features/search/ui"

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
  ...overrides
})

describe("SearchResultsSection", () => {
  it("renders nothing when normalizedInput is empty", () => {
    const html = renderToStaticMarkup(
      <SearchResultsSection
        normalizedInput=""
        filteredFilms={[]}
        selectedFilmUrl=""
        handleFilmClick={vi.fn()}
      />
    )

    expect(html).toBe("")
  })

  it("renders empty state when no films match", () => {
    const html = renderToStaticMarkup(
      <SearchResultsSection
        normalizedInput="hope"
        filteredFilms={[]}
        selectedFilmUrl=""
        handleFilmClick={vi.fn()}
      />
    )

    expect(html).toContain("No films found")
  })

  it("renders film results when matches exist", () => {
    const html = renderToStaticMarkup(
      <SearchResultsSection
        normalizedInput="hope"
        filteredFilms={[makeFilm({ title: "A New Hope" })]}
        selectedFilmUrl=""
        handleFilmClick={vi.fn()}
      />
    )

    expect(html).toContain("A New Hope")
    expect(html).toContain("Episode 4")
  })
})
