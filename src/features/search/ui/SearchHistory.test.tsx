import { renderToStaticMarkup } from "react-dom/server"
import { SearchHistory } from "./SearchHistory"

describe("SearchHistory", () => {
  it("renders nothing when history is empty", () => {
    const html = renderToStaticMarkup(
      <SearchHistory items={[]} onDelete={vi.fn()} onSelect={vi.fn()} />,
    )

    expect(html).toBe("")
  })

  it("renders provided film titles", () => {
    const html = renderToStaticMarkup(
      <SearchHistory
        items={[
          { id: 1, url: "https://swapi.dev/api/films/1/", title: "A New Hope" },
          { id: 2, url: "https://swapi.dev/api/films/2/", title: "The Empire Strikes Back" },
        ]}
        onDelete={vi.fn()}
        onSelect={vi.fn()}
      />,
    )

    expect(html).toContain("A New Hope")
    expect(html).toContain("The Empire Strikes Back")
  })
})
