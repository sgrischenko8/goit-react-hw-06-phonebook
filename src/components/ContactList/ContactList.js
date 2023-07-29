import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.filter);

  function getContactsToRender() {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const contactToRender = getContactsToRender();

  return (
    <ul>
      {contactToRender.map(el => (
        <li key={el.id} className={styles.item}>
          <ContactListItem contact={el} />
        </li>
      ))}
    </ul>
  );
};
