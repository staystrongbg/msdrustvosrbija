import { useParams } from 'react-router';
import { useGlobalContext } from './context';

const Samovest = () => {
  const { vesti } = useGlobalContext();
  const { id } = useParams();
  const vest = vesti.find((v) => v.id == id);
  console.log(vest);
  return (
    <div className='container'>
      <img src={vest.img} alt='' />
      <div>
        <h2>{vest.title}</h2>
        <p>{vest.text}</p>
      </div>
    </div>
  );
};

export default Samovest;
