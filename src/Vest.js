import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useGlobalContext } from './context';

const Vest = () => {
  console.log(useParams(), useRouteMatch());
  const { vesti } = useGlobalContext();

  const sortVesti = vesti.sort((a, b) => a.date.year > b.date.year);

  const latest = sortVesti.slice(sortVesti.length - 2, sortVesti.length);

  return (
    <>
      {latest &&
        latest.map((vest) => {
          return (
            <Link key={vest.id} to={`/vesti/${vest.id}`}>
              <div
                className='vest'
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  fontSize: '14px',
                  maxWidth: '550px',
                  margin: '0.6rem',
                  padding: '0.75rem',
                  borderRadius: '5px',
                }}
              >
                <img src={vest.img} alt='' />
                <div>
                  <p>
                    {vest.date.day}
                    {vest.date.month}
                    {vest.date.year}
                  </p>
                  <h2>{vest.title}</h2>
                  <p>{vest.text}</p>
                </div>
              </div>
            </Link>
          );
        })}
      <Link style={{ color: '#444' }} to='/vesti'>
        <p style={{ margin: '1rem', cursor: 'pointer' }}>
          Jos vesti&gt;&gt;&gt;
        </p>
      </Link>
    </>
  );
};

export default Vest;
