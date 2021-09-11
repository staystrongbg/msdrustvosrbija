import {
  FaExclamationCircle,
  FaCalendarCheck,
  FaExclamationTriangle,
  FaRedoAlt,
  FaPills,
  FaPhone,
} from 'react-icons/fa';

const Ms = () => {
  return (
    <>
      <h2
        style={{
          textAlign: 'center ',
          fontSize: '2rem',
          textTransform: 'uppercase',
          color: '#444',
          position: 'relative',
          display: 'inline-block',
          margin: '0 50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
        }}
      >
        Multipla skleroza
      </h2>
      <article className='ms'>
        <div className='multipla'>
          <FaExclamationCircle size={50} />
          <p>
            <b>Uzrok</b>
            <br /> Iako tačan uzrok MS još uvek nije sasvim jasan...
          </p>
        </div>
        <div className='multipla'>
          <FaCalendarCheck size={50} />
          <p>
            <b> Forme i tok bolesti</b>
            <br /> Postoji nekoliko osnovnih formi MS...
          </p>
        </div>
        <div className='multipla'>
          <FaExclamationTriangle size={50} />
          <p>
            <b> Simptomi I znaci</b>
            <br /> MS je kompleksna bolest, i ima mnoge simptome...
          </p>
        </div>
        <div className='multipla'>
          <FaRedoAlt size={50} />
          <p>
            <b> Dijagnoza</b>
            <br /> Nekada je teško tačno utvrditi početak bolesti...
          </p>
        </div>
        <div className='multipla'>
          <FaPills size={50} />
          <p>
            <b>Terapija </b>
            <br />
            Farmakološka i nefarmakološka terapija...
          </p>
        </div>
        <div className='multipla'>
          <FaPhone size={50} />
          <p>
            <b> Kontaktirajte nas</b>
            <br /> Lorem ipsum dolor sit amet, consecte adipiscing elit.
          </p>
        </div>
      </article>
    </>
  );
};

export default Ms;
