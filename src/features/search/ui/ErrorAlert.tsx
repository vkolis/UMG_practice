import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type ErrorAlertProps = {
  message: string;
}

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{message}</Alert>
    </Stack>
  );
}