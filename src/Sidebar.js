import Overlay from './Overlay';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';

const Sidebar = ({ logo, data }) => {
  const {
    showSidebar,
    setShowSidebar,
    setShowSublinks,
    showSublinks,
    handleSublinks,
    subKategorija,
  } = useGlobalContext();

  document.body.style.overflow = showSidebar ? 'hidden' : '';

  return (
    <>
      <div
        className='sidebar-container'
        style={
          showSidebar
            ? { transform: 'translateX(0)' }
            : { transform: 'translateX(-120%)' }
        }
      >
        <ul className='sidenav-links'>
          <div>
            <img src={logo} style={{ width: '120px' }} alt='ms srbija logo' />
          </div>
          {data.map((data) =>
            data.sublinks ? (
              data.sublinks.map(
                (sublink, id) =>
                  showSublinks && (
                    <button
                      key={id}
                      className='sublink'
                      onClick={(e) => subKategorija(e)}
                    >
                      {sublink}
                    </button>
                  )
              )
            ) : (
              <li
                key={data.id}
                onClick={
                  data.link === 'multimedija i publikacije'
                    ? handleSublinks
                    : () => setShowSidebar(false)
                }
              >
                <Link
                  to={data.path}
                  style={{ color: '#444' }}
                  // onClick={() => setShowSidebar(false)}
                >
                  {data.link}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <Overlay
        setShowSublinks={setShowSublinks}
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />
    </>
  );
};

export default Sidebar;
