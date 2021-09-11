import oblik from './oblik.png';

const Content = () => {
  return (
    <>
      <article className='main-content'>
        <img className='main-logo' src={oblik} alt='' />
        <h1 className='main-heading'>
          Društvo
          <br />
          multiple skleroze
          <br />
          srbije
        </h1>
        <p className='text-par'>
          Društvo MS Srbije bavi se izazovima u smislu poboljšanja kvaliteta
          života osoba sa multiplom sklerozom, sarađujući sa MS organizacijama
          širom sveta, kao i pružanje programa i usluga dizajniranih da pomogne
          ljudima sa MS i njihovim porodicama da nastave svoje živote. Društvo
          je posvećeno postizanju sveta bez MS.
        </p>
      </article>
    </>
  );
};

export default Content;
