import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
 
  const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()));

   return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
          ></ContactItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
 };
