import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { renderToStaticMarkup } from "react-dom/server"
import { ShowSearch } from "./ShowSearch"

describe("ShowSearch", () => {
  it("renders SearchInput when films data is available", () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })

    queryClient.setQueryData(["films"], { results: [] })

    const html = renderToStaticMarkup(
      <QueryClientProvider client={queryClient}>
        <ShowSearch />
      </QueryClientProvider>,
    )

    expect(html).toContain("Type text to search...")
  })
})
