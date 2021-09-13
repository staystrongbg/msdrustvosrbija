import { Link, useRouteMatch } from 'react-router-dom';
import { useGlobalContext } from './context';
const Vesti = () => {
  const { vesti } = useGlobalContext();
  const { url } = useRouteMatch();
  const sorted = vesti.sort((a, b) => b.date.year > a.date.year);
  return (
    <div className='container'>
      {sorted.map((vest) => {
        return (
          <Link
            style={{ color: '#444' }}
            to={`${url}/${vest.id}`}
            key={vest.id}
          >
            <div
              className='vest'
              style={{
                display: 'flex',
                gap: '1rem',
                fontSize: '14px',
                maxWidth: '100%',
                margin: '0.6rem',
                padding: '0.75rem',
                borderRadius: '5px',
              }}
            >
              <img src={vest.img} alt='' />
              <div>
                <p>
                  {vest.date.day}. {vest.date.month}. {vest.date.year}
                </p>
                <h2>{vest.title}</h2>
                <p>{vest.text}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Vesti;
