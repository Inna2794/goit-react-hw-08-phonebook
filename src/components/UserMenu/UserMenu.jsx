import { Box, Button, styled, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const CustomMenu = styled(Box)`
  display: flex;
  align-items: baseline;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  if (user === undefined) return;
  const name = user.name[0].toUpperCase() + user.name.slice(1);
  console.log('UserMenuComponent');
  return (
    <CustomMenu>
      <Typography component="p">Welcome, {name}</Typography>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        color="inherit"
        sx={{ '&:hover': { color: 'orange' }, ml: '15px' }}
      >
        Logout
      </Button>
    </CustomMenu>
  );
};
