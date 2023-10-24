import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from './filterSlice';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
    const { filter } = useSelector((state) => state.filter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
    return (
        <label>
            Find contacts by name:
            <input
                type="text"
                value={filter}
                name="filter"
                onChange={handleFilterChange}
            />
        </label>
    );
};