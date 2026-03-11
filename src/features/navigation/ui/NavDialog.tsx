import { forwardRef, type ReactElement, type Ref } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import { Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { NAVBAR_WIDTH } from '@/features/navigation/constants';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

type NavDialogProps = {
  isNavDialogOpen: boolean;
  onClose: () => void;
}

export const NavDialog = ({ isNavDialogOpen, onClose }: NavDialogProps) => {
  const navDialogBackdropSx = {
    left: NAVBAR_WIDTH,
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(15, 23, 42, 0.18)",
  } as const

  const navDialogPaperSx = {
    width: "min(1100px, calc(100vw - 120px))",
    minHeight: "90vh",
    borderRadius: 4,
    m: 0,
  } as const
  
  return (
    <Dialog
      open={isNavDialogOpen}
      onClose={onClose}
      slots={{ transition: Transition }}
      keepMounted
      slotProps={{
        backdrop: { sx: navDialogBackdropSx},
        paper: { sx: navDialogPaperSx}
      }}
    >

      <Box sx={{ position: "relative" }}>
        <IconButton 
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          <Close />
        </IconButton>
      </Box>
    </Dialog>
  );
}
