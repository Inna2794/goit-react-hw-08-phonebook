import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const StyledLink = styled(NavLink)`
  color: white;
  &:first-of-type {
    margin-right: 15px;
  }

  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('NavigationComponent');
  return (
    <Box>
      <StyledLink to="/goit-react-hw-08-phonebook/">Home</StyledLink>
      {isLoggedIn && (
        <StyledLink to="/goit-react-hw-08-phonebook/contacts">
          Contacts
        </StyledLink>
      )}
    </Box>
  );
};

//       <StyledLink to="/goit-react-hw-08-phonebook/">Home</StyledLink>
//  важна палочка "/" после -phonebook "/" !!!  Без неё Home был всё время актив
