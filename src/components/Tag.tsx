import React from 'react';

type TagProps = {
  name: string;
  addFilter: (value: string) => void;
};

const Tag: React.FC<TagProps> = ({ name, addFilter }) => {
  return (
    <button onClick={() => addFilter(name)} className='btn tag'>
      {name}
    </button>
  );
};
export default Tag;
