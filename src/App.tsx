import { Card, Filter, Footer } from './components';
// import data from '../data.json';
import data from '../data.ts';

function App() {
  return (
    <>
      <header className='header'></header>
      <main className='container'>
        <div className='card card--filter'>
          <div className='card__filters'>
            <Filter name='HTML' />
            <Filter name='CSS' />
            <Filter name='JavaScript' />
          </div>
          <div className='card__button'>
            <button>Clear</button>
          </div>
        </div>
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
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
