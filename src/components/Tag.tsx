import React from 'react';

type TagProps = {
  name: string;
};

const Tag: React.FC<TagProps> = ({ name }) => {
  return <span className='tag'>{name}</span>;
};
export default Tag;
