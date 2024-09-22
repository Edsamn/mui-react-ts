import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext } from 'react';
import { ConfirmationModalContext } from '../contexts/ConfirmationModalContext';

function ConfirmationModal() {
  const dataContext = useContext(ConfirmationModalContext);

  return (
    <>
      <Dialog
        open={dataContext?.open || false}
        onClose={() => dataContext?.setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dataContext?.data?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{dataContext?.data?.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dataContext?.setOpen(false)}>{dataContext?.data?.labelCancel || 'Cancelar'}</Button>
          <Button onClick={() => dataContext?.setOpen(false)} autoFocus>
            {dataContext?.data?.labelConfirm || 'Confirmar'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ConfirmationModal;
