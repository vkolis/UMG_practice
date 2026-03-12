import { forwardRef, type ReactElement, type Ref } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import { Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { NAVBAR_WIDTH } from '@/features/navigation/constants';
import { styled } from "@mui/material/styles"

type NavDialogProps = {
  isNavDialogOpen: boolean;
  onClose: () => void;
}

const DialogBox = styled(Box)({
  position: "relative",
})

const IconButtonWrapper = styled(IconButton)({
  position: "absolute",
  top: 16,
  right: 16,
})

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export const NavDialog = ({ isNavDialogOpen, onClose }: NavDialogProps) => {
  const navDialogBackdropSx = {
    left: NAVBAR_WIDTH,
  } as const

  const navDialogPaperSx = {
    width: "min(1100px, calc(100vw - 120px))",
    minHeight: "90vh",
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

      <DialogBox>
        <IconButtonWrapper onClick={onClose}>
          <Close />
        </IconButtonWrapper>
      </DialogBox>
    </Dialog>
  );
}
