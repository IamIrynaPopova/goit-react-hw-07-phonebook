import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/contactsSlice';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(id));
  };

  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
