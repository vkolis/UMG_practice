import { IconButton } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import Box from '@mui/material/Box';

export const NavBar = () => {
  return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 50,
          height: "100vh",
          bgcolor: "#fff",
          borderRight: "1px solid #e0e0e0",
          boxShadow: "4px 0 16px rgba(0, 0, 0, 0.08)",
        }}
      >
      <IconButton>
        <Dashboard />
      </IconButton>
    </Box>
  );
}