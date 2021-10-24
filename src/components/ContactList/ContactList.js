import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';
// import { getVisibleContact } from '../../redux/phonebook';
import {
  getVisibleContact,
  deleteContact,
  fetchContact,
} from '../../redux/phonebook';

function ContactList() {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <section>
      <h2>Contact</h2>

      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            id={id}
            key={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </section>
  );
}

export default ContactList;
