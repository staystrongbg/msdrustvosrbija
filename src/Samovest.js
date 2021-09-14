import { useParams } from 'react-router';
import { useGlobalContext } from './context';
import { useEffect } from 'react';
import Loading from './Loading';

const Samovest = () => {
  const { vesti, setLoading, loading } = useGlobalContext();
  const { id } = useParams();
  const vest = vesti.find((v) => v.id == id);
  console.log(vest);

  useEffect(() => {
    if (vest) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && <Loading />}
      {vest && (
        <div className='container' style={{ marginTop: '0' }}>
          <div className='vest-full'>
            <div className='img-container'>
              <img src={vest.img} alt='' />
            </div>
            <div className='vest-text'>
              <h1>{vest.title}</h1>
              <p>{vest.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Samovest;
