import { renderToStaticMarkup } from "react-dom/server"
import type { Film } from "@/features/search/api"
import { SelectedFilmDetailsContent } from "@/features/search/ui"

const film: Film = {
  title: "A New Hope",
  episode_id: 4,
  opening_crawl: "It is a period of civil war.",
  director: "George Lucas",
  producer: "Gary Kurtz, Rick McCallum",
  release_date: "1977-05-25",
  characters: ["c1", "c2"],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  created: "2014-12-10T14:23:31.880000Z",
  edited: "2014-12-20T19:49:45.256000Z",
  url: "https://swapi.dev/api/films/1/",
}

describe("SelectedFilmDetailsContent", () => {
  it("renders film details", () => {
    const html = renderToStaticMarkup(<SelectedFilmDetailsContent film={film} />)

    expect(html).toContain("Title")
    expect(html).toContain("A New Hope")
    expect(html).toContain("Director")
    expect(html).toContain("George Lucas")
    expect(html).toContain("Characters")
    expect(html).toContain("2")
  })
})
