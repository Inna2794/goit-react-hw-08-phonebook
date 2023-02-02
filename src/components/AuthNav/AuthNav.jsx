import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: white;
  font-weight: 600;
  &:first-of-type {
    margin-right: 15px;
  }
  &.active,
  &.hover {
    color: orange;
  }
`;
export const AuthNav = () => {
  return (
    <nav>
      <StyledLink to="/goit-react-hw-08-phonebook/register">
        Register
      </StyledLink>
      <StyledLink to="/goit-react-hw-08-phonebook/login">Log In</StyledLink>
    </nav>
  );
};
