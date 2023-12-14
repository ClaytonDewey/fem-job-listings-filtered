import React from 'react';
import { Tag } from '.';

type CardProps = {
  company: string;
  logo: string;
  newJob: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: number;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  addFilter: (e: string) => void;
};

const Card: React.FC<CardProps> = ({
  company,
  logo,
  newJob,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  addFilter,
}) => {
  const tagArray: string[] = [];
  const tags: string[] = tagArray.concat(role, level, languages, tools);

  const handleClick = (e: string) => {
    addFilter(e);
  };

  return (
    <div className={`card ${newJob ? 'card--new' : ''}`}>
      {/* Item Start */}
      <img src={logo} alt={company} className='card__image' />

      <div className='card__meta'>
        <div className='card__meta--header'>
          <h2 className='card__meta--title'>{company}</h2>
          {newJob && <div className='flag flag--new'>New!</div>}
          {featured && <div className='flag flag--featured'>Featured</div>}
        </div>
        <h3 className='card__meta--position'>{position}</h3>
        <div className='card__meta--footer'>
          <span className='date'>{postedAt}</span>
          <span className='type'>{contract}</span>
          <span className='location'>{location}</span>
        </div>
      </div>
      {/* Role */}
      <div className='card__tags'>
        {tags.map((tag, i) => {
          return <Tag addFilter={handleClick} key={i} name={tag} />;
        })}
      </div>
      {/* Item End */}
    </div>
  );
};
export default Card;
