import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register, reset } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (name === '' || email === '' || password === '') {
      dispatch(reset('All fields must be write in'));
      return;
    }
    if (password.length < 7) {
      dispatch(reset('Password must be at least 7 characters long'));
      return;
    }
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <TextField label="Username" type="text" name="name" sx={{ mb: '20px' }} />
      <TextField label="Email" type="email" name="email" sx={{ mb: '20px' }} />
      <TextField
        label="Password"
        type="password"
        name="password"
        sx={{ mb: '20px' }}
      />
      <Button type="submit">Register</Button>
    </Box>
  );
};

export default RegisterForm;

// email: 'qwertyui@qwe.co';
// name: 'qwertyui';
// password: 'qwertyui123';

// zxcvbn@mail.nd
// zxcvbn123

// dfghjkjh@bgh.liu
// defrgth456

// mail:  fbsdfbsbsdb@fdbf.etew
// password:  dsvefgegvefgevbds

// aggrehrgrehbs@mail.com
// examplepwrd12345

//  sdgsrahshrh@mail.com
//  fnrfhbsdgeg
//
