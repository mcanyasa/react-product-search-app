import React from 'react';
import Select from 'react-select';

const Filters = ({ handleStock, handleSort, sortOrder, filterStock }) => {
  const options = [
    { value: '', label: 'None' },
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' }
  ];

  const optionsStock = [
    { value: '', label: 'None' },
    { value: 'asc', label: 'Out Of Stock' },
    { value: 'desc', label: 'In Stock' }
  ];

  return (
    <div className="sortBy">
      Sort by price
      <Select
        value={sortOrder}
        className="select-filter"
        onChange={handleSort}
        options={options}
      />
      <br></br>
      Filter by stock
      <Select
        value={filterStock}
        className="select-filter"
        onChange={handleStock}
        options={optionsStock}
      />
    </div>
  );
};

export default Filters;
