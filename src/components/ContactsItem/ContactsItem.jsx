import PropTypes from 'prop-types';
import { Button, ListItem, ListItemText } from '@mui/material';

const ContactsListItem = ({ id, name, number, onDelete }) => {
  const handleDeleteClick = evt => {
    onDelete(evt.target.id);
  };
  return (
    <ListItem alignItems="flex-start">
      <ListItemText variant="body1" component="span" sx={{ mr: '10px' }}>
        {name}
      </ListItemText>
      <ListItemText variant="body1" component="span" sx={{ mr: '10px' }}>
        {number}
      </ListItemText>
      <Button
        id={id}
        aria-label="delete"
        type="button"
        color="error"
        onClick={handleDeleteClick}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactsListItem;

ContactsListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
