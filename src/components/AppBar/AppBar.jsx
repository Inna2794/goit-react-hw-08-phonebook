import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 30px;
  /* background-color: grey; */
  /* background-image: linear-gradient(to right, blue 5%, yellow); */
`;

export const AppBarComponent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('AppBarComponent');
  return (
    <StyledAppBar position="static">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledAppBar>
  );
};
