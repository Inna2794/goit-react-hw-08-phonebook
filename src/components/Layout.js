import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';

import { Box, styled, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  height: 100vh;
  background-image: url(https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_960_720.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Layout = () => {
  console.log('Layout');
  return (
    <CustomBox>
      <AppBarComponent />
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Outlet />
      </Suspense>
    </CustomBox>
  );
};
