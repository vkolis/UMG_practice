import { forwardRef, Fragment, type ReactElement, type Ref } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import { Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

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
  setIsNavDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavDialog = ({ isNavDialogOpen, setIsNavDialogOpen }: NavDialogProps) => {
  return (
    <Fragment>
      <Dialog
        open={isNavDialogOpen}
        slots={{
          transition: Transition,
          
        }}
        slotProps={{
          paper: {
            sx: {
              minWidth: "90vw",
              minHeight: "90vh",
              borderRadius: 4,
            }
          }
        }}
        keepMounted
        onClose={() => setIsNavDialogOpen(false)}
      >

        <Box sx={{ position: "relative" }}>
          <IconButton 
            onClick={() => setIsNavDialogOpen(false)}
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
    </Fragment>
  );
}