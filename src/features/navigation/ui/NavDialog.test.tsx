import type { ReactElement } from "react"
import { NavDialog } from "@/features/navigation/ui"

type NavDialogRootProps = {
  open: boolean
  onClose: () => void
  keepMounted: boolean
  slots: {
    transition: unknown
  }
  children: ReactElement<NavDialogBoxProps>
}

type NavDialogBoxProps = {
  children: ReactElement<NavDialogIconButtonProps>
}

type NavDialogIconButtonProps = {
  onClick: () => void
}

describe("NavDialog", () => {
  it("passes dialog state and transition props to Dialog", () => {
    const element = NavDialog({
      isNavDialogOpen: true,
      onClose: vi.fn(),
    }) as ReactElement<NavDialogRootProps>

    expect(element.props.open).toBe(true)
    expect(element.props.keepMounted).toBe(true)
    expect(element.props.slots.transition).toBeDefined()
  })

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn()

    const element = NavDialog({
      isNavDialogOpen: true,
      onClose,
    }) as ReactElement<NavDialogRootProps>

    const box = element.props.children as ReactElement<NavDialogBoxProps>
    const iconButton = box.props.children as ReactElement<NavDialogIconButtonProps>

    iconButton.props.onClick()

    expect(onClose).toHaveBeenCalledOnce()
  })
})
