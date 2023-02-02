import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const CustomBox = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 42vh;
  left: 35vw;
  rotate: -5deg;
  @media screen and (max-width: 600px) {
    left: 15vw;
  }
`;

export default function Home() {
  return (
    <CustomBox>
      <Typography
        color="#800080"
        component="h1"
        variant="h3"
        sx={{ mt: '50px', fontWeight: '500' }}
      >
        phonebook
      </Typography>
    </CustomBox>
  );
}
