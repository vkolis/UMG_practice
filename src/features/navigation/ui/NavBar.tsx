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
            borderRight: "1px solid",
          }}
      />
  );
}