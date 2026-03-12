import { IconButton } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { NAVBAR_WIDTH } from '@/features/navigation/constants';
import { SwitchThemeMode } from './SwitchThemeMode';

type NavBarProps = {
  isNavDialogOpen: boolean;
  onToggle: () => void;
}

export const NavBar = ({ onToggle, isNavDialogOpen }: NavBarProps) => {
  const iconColor = isNavDialogOpen ? "primary.main" : "text.secondary"

  return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: NAVBAR_WIDTH,
          height: "100vh",
          bgcolor: "background.paper",
          borderRight: 1,
          borderColor: "divider",
          boxShadow: 4,
        }}
      >
      <SwitchThemeMode />

      <IconButton 
        onClick={onToggle}
        sx={{
          color: iconColor,
          mt: 1,
        }}>
        <Dashboard/>
      </IconButton>
    </Box>
  );
}
