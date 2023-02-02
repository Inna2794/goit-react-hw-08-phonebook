import { Typography, Alert } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { CustomBox } from './Register';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux/auth/operations';
import { useEffect } from 'react';

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  if (error) {
    setTimeout(() => {
      dispatch(reset());
    }, 5000);
  }
  return (
    <CustomBox>
      {error && (
        <Alert severity="info" color="info">
          {error}
        </Alert>
      )}

      <Typography variant="" component="h2" sx={{ mb: '15px' }}>
        Login
      </Typography>
      <LoginForm />
    </CustomBox>
  );
}
