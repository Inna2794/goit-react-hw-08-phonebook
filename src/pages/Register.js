import { Box, Typography, Alert } from '@mui/material';
import styled from '@emotion/styled';
import RegisterForm from '../components/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from 'redux/auth/operations';
import { useEffect } from 'react';

export const CustomBox = styled(Box)`
  max-width: 400px;
  margin: 25px auto 0;
  padding: 15px;
  background-image: linear-gradient(
    rgba(245, 245, 245, 0.85),
    rgba(245, 245, 245, 0.85)
  );
  border-radius: 10px;
`;

export default function Register() {
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

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
        Registration
      </Typography>

      <RegisterForm />
    </CustomBox>
  );
}
