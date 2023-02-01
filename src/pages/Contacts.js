import Filter from 'components/Filter';
import Form from '../components/Form';
import ContactsList from '../components/ContactsList';
import { Typography } from '@mui/material';
import { CustomBox } from './Register';

export default function Contacts() {
  console.log('ContactsPage');
  return (
    <CustomBox sx={{ pt: '20px' }}>
      <Typography component="h2" variant="" sx={{ mb: '10px' }}>
        Phonebook
      </Typography>
      <Form />

      <Typography component="h2" variant="" sx={{ mb: '10px', mt: '20px' }}>
        Contacts
      </Typography>
      <Filter />
      <ContactsList />
    </CustomBox>
  );
}
