import { IconButton } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { NAVBAR_WIDTH } from '@/features/navigation/constants';

type NavDialogProps = {
  isNavDialogOpen: boolean;
  setIsNavDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ setIsNavDialogOpen, isNavDialogOpen }: NavDialogProps) => {
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
        onClick={() => setIsNavDialogOpen(prev => !prev)}
        sx={{
          color: !isNavDialogOpen ? "#0004020" : "#1976d2" ,
          mt: 1,
        }}>
        <Dashboard/>
      </IconButton>
    </Box>
  );
}
