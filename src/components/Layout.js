import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';

import { Box, styled, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  height: 100vh;
  background-image: url(https://pixabay.com/get/g90b79af91adddfa509a82e634d02599c9147c8947719a42262a591a465053404cc5cfbd14b8009ab11a372357e17af2bca8fc6de5bcfec603e768aa0efa27416_1920.jpg);
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Layout = () => {
  return (
    <CustomBox>
      <AppBarComponent />
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Outlet />
      </Suspense>
    </CustomBox>
  );
};
