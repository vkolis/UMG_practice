import { NavBar, NavDialog } from "@/features/navigation/ui"
import { useState } from "react"

type NavigationLayoutProps = {
  children: React.ReactNode
}

export const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  const [isNavDialogOpen, setIsNavDialogOpen] = useState(false)

  const handleNavDialogToggle = () => {
    setIsNavDialogOpen((prev) => !prev)
  }

  const handleNavDialogClose = () => {
    setIsNavDialogOpen(false)
  }

  return (
    <>
      <NavBar isNavDialogOpen={isNavDialogOpen} onToggle={handleNavDialogToggle} />
      {children}
      <NavDialog isNavDialogOpen={isNavDialogOpen} onClose={handleNavDialogClose} />
    </>
  )
}
