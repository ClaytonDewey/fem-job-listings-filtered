import { Card, Footer } from './components';
// import data from '../data.json';
import data from '../data.ts';

function App() {
  return (
    <>
      <header className='header'></header>
      <main className='container'>
        <div className='card card--filter'>
          <div className='card__filters'>
            <div className='tag'>
              HTML
              <span className='close'>
                <img src='./images/icon-remove.svg' alt='clear' />
              </span>
            </div>
          </div>
          <div className='card__button'>
            <button>clear</button>
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
