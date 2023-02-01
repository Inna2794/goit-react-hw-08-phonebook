import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { filterContacts } from 'redux/operations';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/sliceFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  console.log('FilterComponent');

  return (
    <>
      <TextField
        variant="outlined"
        label="Find contacts by name"
        id="filter"
        type="text"
        value={filter}
        onChange={handleChange}
        sx={{ width: '100%' }}
      />
    </>
  );
};

export default Filter;
