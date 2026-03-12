import { IconButton } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { NAVBAR_WIDTH } from '@/features/navigation/constants';

type NavBarProps = {
  isNavDialogOpen: boolean;
  onToggle: () => void;
}

export const NavBar = ({ onToggle, isNavDialogOpen }: NavBarProps) => {
  const inactiveIconColor = "#64748b"
  const activeIconColor = "#1976d2"

  return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: NAVBAR_WIDTH,
          height: "100vh",
          bgcolor: "#fff",
          borderRight: "1px solid #e0e0e0",
          boxShadow: "4px 0 16px rgba(0, 0, 0, 0.08)",
        }}
      >
      <IconButton 
        onClick={onToggle}
        sx={{
          color: !isNavDialogOpen ? inactiveIconColor : activeIconColor,
          mt: 1,
        }}>
        <Dashboard/>
      </IconButton>
    </Box>
  );
}
