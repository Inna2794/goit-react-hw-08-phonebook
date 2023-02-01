import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  filterContacts,
} from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (filter === '') {
      dispatch(fetchContacts());
    } else {
      dispatch(filterContacts(filter));
    }
  }, [dispatch, filter]);

  const handleOnClick = evt => {
    dispatch(deleteContacts(evt.currentTarget.id));
  };

  console.log('ContactListComponent');

  return (
    <List>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {items.map(el => {
        const { name, number, id } = el;
        return (
          <ListItem key={id} alignItems="flex-start">
            <ListItemText variant="body1" component="span" sx={{ mr: '10px' }}>
              {name}
            </ListItemText>
            <ListItemText variant="body1" component="span" sx={{ mr: '10px' }}>
              {number}
            </ListItemText>
            <IconButton id={id} type="button" onClick={handleOnClick}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactsList;
