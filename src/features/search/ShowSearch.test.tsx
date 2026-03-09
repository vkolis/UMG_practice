import type { ReactElement } from "react"
import { describe, expect, it } from "vitest"

import { ShowSearch } from "./ShowSearch"
import { SearchInput } from "./ui/SearchInput"

type SearchInputProps = {
  inputValue: string
  setInputValue: (value: string) => void
}

describe("ShowSearch", () => {
  it("renders SearchInput", () => {
    const element = ShowSearch() as ReactElement<SearchInputProps, typeof SearchInput>

    expect(element.type).toBe(SearchInput)
  })
})
