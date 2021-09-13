import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='container'>
      <h3 style={{ marginBottom: '20px' }}>Sorry that page doesnt exist</h3>
      <div
        style={{
          backgroundColor: 'olive',
          display: 'inline',
          padding: '0.5rem 1rem',
          fontWeight: '700',
          color: '#fff',
          borderRadius: '7px',
        }}
      >
        <Link to='/'>home</Link>
      </div>
    </div>
  );
};

export default NotFound;
