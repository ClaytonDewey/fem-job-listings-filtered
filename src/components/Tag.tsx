import React from 'react';

type TagProps = {
  name: string;
  addFilter: (e: string) => void;
};

const Tag: React.FC<TagProps> = ({ name, addFilter }) => {
  const handleClick = (e) => {
    addFilter(e.target.textContent);
  };
  return (
    <button onClick={handleClick} className='btn tag'>
      {name}
    </button>
  );
};
export default Tag;
