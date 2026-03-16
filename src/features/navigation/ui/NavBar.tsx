import { IconButton } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import { NAVBAR_WIDTH } from '@/features/navigation/constants';
import { SwitchThemeMode } from './SwitchThemeMode';
import { styled } from "@mui/material/styles"

type NavBarProps = {
  isNavDialogOpen: boolean;
  onToggle: () => void;
}

const NavBarAside = styled("aside")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: NAVBAR_WIDTH,
  height: "100vh",
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[4],
}))

export const NavBar = ({ onToggle, isNavDialogOpen }: NavBarProps) => {
  return (
    <NavBarAside>
      <SwitchThemeMode />
        <IconButton 
          onClick={onToggle}
          sx={(theme) => ({
            color: isNavDialogOpen ? theme.palette.primary.main : theme.palette.text.secondary,
            mt: 1,
          })}>
        <Dashboard/>
      </IconButton>
    </NavBarAside>
  );
}
