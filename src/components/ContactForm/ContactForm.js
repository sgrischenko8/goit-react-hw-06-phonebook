import { add } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
import { Button } from 'components/Button/Button';
import styles from './ContactForm.module.css';

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  function handleSubmit(values, actions) {
    if (values.name.trim() === '' || values.number.trim() === '') {
      return;
    }
    if (
      contacts.some(
        contact => contact?.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return alert(`${values.name} is already in contacts.`);
    }

    values.id = nanoid();
    dispatch(add(values));
    actions.resetForm();
  }

  function dummyClick() {
    return;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Field
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <Field
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button onClick={dummyClick}>Add contact</Button>
      </Form>
    </Formik>
  );
};
