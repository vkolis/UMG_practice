import type { ChangeEvent, ReactElement } from "react"
import { SearchInput } from "./SearchInput"

type SearchInputTextFieldProps = {
  value: string
  label: string
  fullWidth: boolean
  autoComplete: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

describe("SearchInput", () => {
  it("passes TextField props correctly", () => {
    const setInputValue = vi.fn()

    const element = SearchInput({
      inputValue: "test123",
      setInputValue,
    }) as ReactElement<SearchInputTextFieldProps>

    expect(element.props.value).toBe("test123")
    expect(element.props.label).toBe("Type text to search...")
    expect(element.props.fullWidth).toBe(true)
    expect(element.props.autoComplete).toBe("off")
  })

  it("calls setInputValue with the entered value", () => {
    const setInputValue = vi.fn()

    const element = SearchInput({
      inputValue: "",
      setInputValue,
    }) as ReactElement<SearchInputTextFieldProps>

    element.props.onChange({
      target: { value: "test123" },
    } as ChangeEvent<HTMLInputElement>)

    expect(setInputValue).toHaveBeenCalledOnce()
    expect(setInputValue).toHaveBeenCalledWith("test123")
  })
})
