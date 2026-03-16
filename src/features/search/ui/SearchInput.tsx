import { TextField } from "@mui/material"
import type { ChangeEvent } from "react"

export const SearchInput = ({inputValue, setInputValue}: {inputValue: string, setInputValue: (value: string) => void}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
      <TextField 
        fullWidth
        label="Type text to search..." 
        variant="outlined" 
        autoComplete="off"
        value={inputValue}
        onChange={handleInputChange}
      /> 
  )
}
