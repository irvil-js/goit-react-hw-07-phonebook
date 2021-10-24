import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { getFilter, changeFilter } from '../../redux/phonebook';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(changeFilter(event.target.value));
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Filter;
