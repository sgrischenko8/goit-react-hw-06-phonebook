import { useDispatch } from 'react-redux';
import { del } from 'redux/contactsSlice';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  function deleteContact() {
    dispatch(del(contact.id));
  }
  return (
    <>
      {contact.name}: {contact.number}
      <Button onClick={deleteContact}>Delete</Button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
