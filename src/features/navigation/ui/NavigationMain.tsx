import Box from "@mui/material/Box"
import { NAVBAR_WIDTH } from "@/features/navigation/constants"

type NavigationMainProps = {
  children: React.ReactNode
}

export const NavigationMain = ({ children }: NavigationMainProps) => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        ml: `${NAVBAR_WIDTH}px`,
      }}
    >
      {children}
    </Box>
  )
}
