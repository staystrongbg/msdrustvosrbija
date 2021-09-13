import logo from './logo.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div
        style={{
          transform: 'rotate(180deg)',
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-evenly',
          alignitems: 'center',
          width: '100%',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <img src={logo} style={{ width: '200px' }} alt='' />
          <p id='footer-logo' style={{ textAlign: 'center' }}>
            DRUSTVO
            <br /> MULTIPLE SKLEROZE
            <br /> SRBIJE
          </p>
        </div>
        <p className='foot-p'>
          <b> Telefon:</b>
          <br />
          +381 11 243 04 75
          <br />
          <br />
          <b>Email:</b>
          <br />
          mssserb@sbb.rs
          <br />
          <br />
          <b>ADRESA:</b>
          <br />
          Sredačka 2, Beograd, Srbija
        </p>
      </div>
    </div>
  );
};

export default Footer;
