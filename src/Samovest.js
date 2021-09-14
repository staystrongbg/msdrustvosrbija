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
        <div className='container'>
          <img src={vest.img} alt='' />
          <div>
            <h2>{vest.title}</h2>
            <p>{vest.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Samovest;
