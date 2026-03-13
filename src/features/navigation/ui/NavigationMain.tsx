import { NAVBAR_WIDTH } from "@/features/navigation/constants"
import { styled } from "@mui/material/styles"

type NavigationMainProps = {
  children: React.ReactNode
}

const NavigationMainBox = styled("main")({
  minHeight: "100vh",
  marginLeft: NAVBAR_WIDTH,
})

export const NavigationMain = ({ children }: NavigationMainProps) => {
  return (
    <NavigationMainBox>
      {children}
    </NavigationMainBox>
  )
}
