import { useDispatch, useSelector } from 'react-redux';
import {GetFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(GetFilter(target.value));
  };
  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <p className={css.message}>Find contacts by name</p>
      <input
        className={css.input}
        onChange={handleChange}
        type="text"
        name="filter"
        value={useSelector(state => state.GetFilter)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
