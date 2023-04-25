import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        const { id, name, phone } = contact;
        return (
          <ContactItem key={id} id={id} name={name} phone={phone}></ContactItem>
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
