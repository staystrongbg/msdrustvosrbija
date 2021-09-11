import Ms from './Ms';
import Vest from './Vest';
import Sponsors from './Sponsors';
import Content from './Content';

const Home = () => {
  return (
    <>
      <Content />
      <div className='container'>
        <Ms />
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            color: '#444',
            textTransform: 'uppercase',
          }}
        >
          Najnovije vesti
        </h2>
        <article id='najnovije'>
          <Vest />
        </article>
      </div>
      <Sponsors />
    </>
  );
};

export default Home;
