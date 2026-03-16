import { IconButton } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import { NAVBAR_WIDTH } from '@/features/navigation/constants';
import { styled } from "@mui/material/styles"
import { theme } from '@/theme/theme';

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
  const iconColor = isNavDialogOpen ? theme.palette.primary.main : theme.palette.text.secondary

  return (
    <NavBarAside>
      <IconButton 
        onClick={onToggle}
        sx={{
          color: iconColor,
          mt: 1,
        }}>
        <Dashboard/>
      </IconButton>
    </NavBarAside>
  );
}
