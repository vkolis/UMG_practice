import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { renderToStaticMarkup } from "react-dom/server"
import { SelectedFilm } from "@/features/search/ui"

describe("SelectedFilm", () => {
  it("renders nothing when selectedFilmUrl is empty", () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })

    const html = renderToStaticMarkup(
      <QueryClientProvider client={queryClient}>
        <SelectedFilm selectedFilmUrl="" />
      </QueryClientProvider>,
    )

    expect(html).toBe("")
  })

  it("renders film details when data is in query cache", () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })

    const selectedFilmUrl = "https://swapi.dev/api/films/1/"
    queryClient.setQueryData(["details", selectedFilmUrl], {
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
      url: selectedFilmUrl,
    })

    const html = renderToStaticMarkup(
      <QueryClientProvider client={queryClient}>
        <SelectedFilm selectedFilmUrl={selectedFilmUrl} />
      </QueryClientProvider>,
    )

    expect(html).toContain("Film details")
    expect(html).toContain("A New Hope")
    expect(html).toContain("George Lucas")
  })
})
