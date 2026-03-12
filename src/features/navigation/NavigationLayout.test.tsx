import { renderToStaticMarkup } from "react-dom/server"
import { NavigationLayout } from "@/features/navigation"

describe("NavigationLayout", () => {
  it("renders provided children inside navigation layout", () => {
    const html = renderToStaticMarkup(
      <NavigationLayout>
        <div>Navigation content</div>
      </NavigationLayout>
    )

    expect(html).toContain("Navigation content")
  })
})
