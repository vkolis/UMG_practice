import { forwardRef, Fragment, type ReactElement, type Ref } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
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
        keepMounted
        onClose={() => setIsNavDialogOpen(prev => !prev)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsNavDialogOpen(false)}>Disagree</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}