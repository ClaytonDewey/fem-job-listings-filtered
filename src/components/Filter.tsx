import React from 'react';

type FilterProps = { name: string };

const Filter: React.FC<FilterProps> = ({ name }) => {
  return (
    <div className='tag tag--filter'>
      {name}
      <span>
        <img src='./images/icon-remove.svg' alt='clear' />
      </span>
    </div>
  );
};
export default Filter;
