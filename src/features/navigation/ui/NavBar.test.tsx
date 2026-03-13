import type { ReactElement, ReactNode } from "react"
import { NavBar } from "@/features/navigation/ui"
import type { Theme } from "@mui/material/styles"
import { createAppTheme } from "@/theme"

type NavBarRootProps = {
  children: ReactNode
}

type NavBarIconButtonProps = {
  onClick: () => void
  sx: (theme: Theme) => {
    color: string
    mt: number
  }
}

const getIconButton = (element: ReactElement<NavBarRootProps>) => {
  const children = element.props.children as ReactElement[]

  return children[1] as ReactElement<NavBarIconButtonProps>
}

describe("NavBar", () => {
  it("passes inactive grey color to icon button when dialog is closed", () => {
    const theme = createAppTheme("dark")
    const element = NavBar({
      isNavDialogOpen: false,
      onToggle: vi.fn(),
    }) as ReactElement<NavBarRootProps>

    const iconButton = getIconButton(element)

    expect(iconButton.props.sx(theme).color).toBe(theme.palette.text.secondary)
  })

  it("passes active color to icon button when dialog is open", () => {
    const theme = createAppTheme("dark")
    const element = NavBar({
      isNavDialogOpen: true,
      onToggle: vi.fn(),
    }) as ReactElement<NavBarRootProps>

    const iconButton = getIconButton(element)

    expect(iconButton.props.sx(theme).color).toBe(theme.palette.primary.main)
  })

  it("calls onToggle when icon button is clicked", () => {
    const onToggle = vi.fn()

    const element = NavBar({
      isNavDialogOpen: false,
      onToggle,
    }) as ReactElement<NavBarRootProps>

    const iconButton = getIconButton(element)

    iconButton.props.onClick()

    expect(onToggle).toHaveBeenCalledOnce()
  })
})
