import React from 'react';

type FilterProps = { name: string; removeFilter: (e: string) => void };

const Filter: React.FC<FilterProps> = ({ name, removeFilter }) => {
  const handleClick = (e) => {
    removeFilter(e.target.textContent);
  };
  return (
    <div onClick={handleClick} className='tag tag--filter'>
      {name}
    </div>
  );
};
export default Filter;
