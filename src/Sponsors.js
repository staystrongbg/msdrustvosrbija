const Sponsors = () => {
  const sponsors = [
    'abanja',
    'bayer',
    'medis',
    'merck',
    'ministarstvo',
    'novartis',
    'sanofi',
    'sbb',
    'teva',
  ];
  return (
    <div>
      <div
        className='sponsors'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '10rem 0',
        }}
      >
        {sponsors.map((sponsor) => (
          <img
            key={sponsor}
            style={{ width: '160px' }}
            src={`./images/${sponsor}.jpg`}
            alt={sponsor}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
