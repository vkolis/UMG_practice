import type { ReactElement } from "react"
import { NAVBAR_WIDTH } from "@/features/navigation/constants"
import { NavDialog } from "@/features/navigation/ui"

type NavDialogRootProps = {
  open: boolean
  onClose: () => void
  slotProps: {
    backdrop: {
      sx: {
        left: number
      }
    }
    paper: {
      sx: {
        minHeight: string
      }
    }
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
  it("passes dialog state and layout props to Dialog", () => {
    const element = NavDialog({
      isNavDialogOpen: true,
      onClose: vi.fn(),
    }) as ReactElement<NavDialogRootProps>

    expect(element.props.open).toBe(true)
    expect(element.props.slotProps.backdrop.sx.left).toBe(NAVBAR_WIDTH)
    expect(element.props.slotProps.paper.sx.minHeight).toBe("90vh")
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
