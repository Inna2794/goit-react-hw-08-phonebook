import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn, reset } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  // dispatch(reset());

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
      dispatch(reset('All fields must be write in'));
      return;
    }
    dispatch(
      logIn({
        email,
        password,
      })
    );
    console.log('LoginFormReset');
    form.reset();
  };

  console.log('LoginFormComponent ');

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <TextField type="email" name="email" label="Email" sx={{ mb: '20px' }} />

      <TextField
        type="password"
        name="password"
        label="Password"
        sx={{ mb: '20px' }}
      />

      <Button type="submit">Log In</Button>
    </Box>
  );
};

export default LoginForm;
