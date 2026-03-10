import { useDebounce } from "@/shared/hooks"
import { useMemo, useRef, useState } from "react"
import type { Film } from "@/features/search/api"

const MAX_HISTORY_ITEMS = 5
const MAX_SEARCH_RESULTS = 6

export type SearchHistoryItem = {
  id: number
  url: string
  title: string
}

type UseShowSearchStateArgs = {
  films: Film[]
}

export const useShowSearchState = ({ films }: UseShowSearchStateArgs) => {
  const [inputValue, setInputValue] = useState("")
  const [selectedFilmUrl, setSelectedFilmUrl] = useState("")
  const [history, setHistory] = useState<SearchHistoryItem[]>([])
  const historyIdRef = useRef(0)

  const debouncedInputValue = useDebounce(inputValue, 400)
  const normalizedInput = debouncedInputValue.trim().toLowerCase()

  const filteredFilms = useMemo(() => {
    if (!normalizedInput) {
      return []
    }

    return films
      .filter(
        (film) =>
          film.title.toLowerCase().includes(normalizedInput) ||
          film.opening_crawl.toLowerCase().includes(normalizedInput),
      )
      .slice(0, MAX_SEARCH_RESULTS)
  }, [films, normalizedInput])

  const handleFilmClick = (film: Film) => {
    setSelectedFilmUrl(film.url)
    setHistory((prev) => {
      historyIdRef.current += 1
      return [...prev, { id: historyIdRef.current, url: film.url, title: film.title }].slice(
        -MAX_HISTORY_ITEMS,
      )
    })
  }

  const handleInputValueChange = (value: string) => {
    setInputValue(value)

    if (value.trim() === "") {
      setSelectedFilmUrl("")
    }
  }

  const handleHistoryDelete = (id: number) => {
    setHistory((prev) => prev.filter((item) => item.id !== id))
  }

  const handleHistorySelect = (url: string) => {
    setSelectedFilmUrl(url)
  }

  return {
    inputValue,
    normalizedInput,
    filteredFilms,
    selectedFilmUrl,
    history,
    handleFilmClick,
    handleInputValueChange,
    handleHistoryDelete,
    handleHistorySelect,
  }
}
