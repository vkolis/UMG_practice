import type { ReactElement } from "react"
import { NavBar } from "@/features/navigation/ui"

type NavBarRootProps = {
  children: ReactElement<NavBarIconButtonProps>
}

type NavBarIconButtonProps = {
  onClick: () => void
  sx: {
    color: string
  }
}

describe("NavBar", () => {
  it("passes active color to icon button when dialog is open", () => {
    const element = NavBar({
      isNavDialogOpen: true,
      onToggle: vi.fn(),
    }) as ReactElement<NavBarRootProps>

    const iconButton = element.props.children as ReactElement<NavBarIconButtonProps>

    expect(iconButton.props.sx.color).toBe("#1976d2")
  })

  it("calls onToggle when icon button is clicked", () => {
    const onToggle = vi.fn()

    const element = NavBar({
      isNavDialogOpen: false,
      onToggle,
    }) as ReactElement<NavBarRootProps>

    const iconButton = element.props.children as ReactElement<NavBarIconButtonProps>

    iconButton.props.onClick()

    expect(onToggle).toHaveBeenCalledOnce()
  })
})
