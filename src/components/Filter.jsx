import { FilterInput } from './Styles.module';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../redux/filter';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };
  return (
    <FilterInput
      type="text"
      name="filter"
      onChange={changeFilter}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;
