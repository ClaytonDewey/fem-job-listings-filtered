import { Card, Filter, Footer } from './components';
// import data from '../data.json';
import data from '../data.ts';
import { useState } from 'react';

function App() {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    if (filters.indexOf(filter) !== -1) return;
    setFilters([...filters, filter]);
  };

  const removeFilter = (value: string) => {
    setFilters((prev) => {
      return prev.filter((filter) => filter !== value);
    });
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const handleAddFilter = (e: string) => {
    addFilter(e);
  };

  const handleRemoveFilter = (e: string) => {
    removeFilter(e);
  };

  return (
    <>
      <header
        className={`header ${filters.length ? '' : 'no-filter'}`}></header>
      <main className='container'>
        {filters.length > 0 && (
          <div className='card card--filter'>
            <div className='card__filters'>
              {filters.map((filter) => (
                <Filter
                  removeFilter={handleRemoveFilter}
                  key={filter}
                  name={filter}
                />
              ))}
            </div>
            <div className='card__button'>
              <button onClick={clearFilters} className='btn btn__clear'>
                Clear
              </button>
            </div>
          </div>
        )}
        {data.map((job) => {
          const {
            id,
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
          } = job;
          return (
            <Card
              key={id}
              company={company}
              logo={logo}
              newJob={newJob}
              featured={featured}
              position={position}
              role={role}
              level={level}
              postedAt={postedAt}
              contract={contract}
              location={location}
              languages={languages}
              tools={tools}
              addFilter={handleAddFilter}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
