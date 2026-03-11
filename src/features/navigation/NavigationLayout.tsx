import { NavBar } from "@/features/navigation/ui"

type NavigationLayoutProps = {
  children: React.ReactNode
}

export const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
