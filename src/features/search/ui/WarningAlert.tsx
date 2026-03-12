import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const WarningAlert = ({ message }: { message: string }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning">{message}</Alert>
    </Stack>
  );
}