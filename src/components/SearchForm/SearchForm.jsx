import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ searchByRegion }) => {
  const [region, setRegion] = useState('');

  const onChangeHandler = e => {
    setRegion(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    searchByRegion(region);
  };

  return (
    <SearchFormStyled onSubmit={onSubmitHandler}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        onChange={onChangeHandler}
      >
        <option selected disabled defaultValue="">
          Select a region and press enter
        </option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
      </Select>
    </SearchFormStyled>
  );
};