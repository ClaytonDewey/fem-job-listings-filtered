import React from 'react';

type FilterProps = { name: string; removeFilter: (value: string) => void };

const Filter: React.FC<FilterProps> = ({ name, removeFilter }) => {
  return (
    <div onClick={() => removeFilter(name)} className='tag tag--filter'>
      {name}
    </div>
  );
};
export default Filter;
