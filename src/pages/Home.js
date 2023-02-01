import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  console.log('HomePage');
  return (
    <CustomBox>
      <Typography
        color="gold"
        component="h1"
        variant="h2"
        sx={{ mt: '50px', fontWeight: '500' }}
      >
        Create your first phonebook)
      </Typography>
    </CustomBox>
  );
}
