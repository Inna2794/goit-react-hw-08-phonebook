import { List } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  filterContacts,
} from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import ContactsListItem from 'components/ContactsItem';

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

  const handleOnClick = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <List>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {items.map(({ name, number, id }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={handleOnClick}
          />
        );
      })}
    </List>
  );
};

export default ContactsList;
