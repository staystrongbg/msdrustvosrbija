import logo from './logo.png';
import Sidebar from './Sidebar';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useGlobalContext } from './context';

const Navbar = () => {
  const { showSidebar, setShowSidebar, data } = useGlobalContext();
  return (
    <>
      <nav className='navigation'>
        <Sidebar data={data} logo={logo} />
        <div className='nav-logo'>
          <img
            src={logo}
            style={{
              width: '80px',
              zIndex: '77',
            }}
            alt='ms srbija logo'
          />
        </div>

        <ul className='nav-links'>
          {data.map((link) => (
            <Link to={link.path} key={link.id}>
              <li className='nav-link'>{link.link}</li>
            </Link>
          ))}
        </ul>

        <FaBars
          id='menu-icon'
          style={{ zIndex: '55' }}
          onClick={() => setShowSidebar(!showSidebar)}
          size={25}
        />
      </nav>
    </>
  );
};

export default Navbar;
//ubaciti u data.json path properti da se postavi kao href za Linkove
