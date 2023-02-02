import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { Box, Button, TextField } from '@mui/material';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const check = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (check) {
      return alert(`${name} is already exist.`);
    }
    dispatch(
      addContacts({
        name,
        number,
      })
    );
    form.reset();
  };
  return (
    <Box
      component="form"
      action=""
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        sx={{ mb: '20px' }}
      />

      <TextField
        label="Number"
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        sx={{ mb: '10px' }}
      />

      <Button type="submit">Add contact</Button>
    </Box>
  );
};

export default Form;
