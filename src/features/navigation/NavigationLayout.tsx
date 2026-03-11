import { NavBar, NavDialog } from "@/features/navigation/ui"
import { useState } from "react"

type NavigationLayoutProps = {
  children: React.ReactNode
}

export const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  const [isNavDialogOpen, setIsNavDialogOpen] = useState(false)
  return (
    <>
      <NavBar setIsNavDialogOpen={setIsNavDialogOpen} isNavDialogOpen={isNavDialogOpen}/>
      {children}
      <NavDialog isNavDialogOpen={isNavDialogOpen} setIsNavDialogOpen={setIsNavDialogOpen}/>
    </>
  )
}
