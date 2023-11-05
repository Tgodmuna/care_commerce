import React,{useState} from 'react'
import Search from '../FirstHeader/Search'
import City from './Icon/City'
import Share from './Icon/Share';
import Love from './Icon/Love';
import Chart from './Icon/Chart';
import User from './Icon/User';
import MenuIcon from '@mui/icons-material/Menu';
import Brand from './Brand';


function Header() {
  const headerIcon = [
    {
      Icon: <City />
    },
    {
      Icon: <Share />
    },
    {
      Icon: <Love />
    },
    {
      Icon: <Chart />
    },
    {
      Icon: <User />
    }
  ];

  const headerIcons = headerIcon.map((item, index) => (
    <li key={index}>
      {item.Icon}
    </li>
  ));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
    <header className='flex bg-gray-900 space-x-4 justify-between py-2 px-4'>
      <div className='flex justify-around  space-x-20' >
      <img src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' alt='logo_'
        className='w-12 h-12 ms-8 shadow-lg rounded-sm'
      />
      <Search className='ms-12'/>
    </div>
  
      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white font-bold text-2xl items-center space-x-12 mt-4 md:mt-0">
        {headerIcons}
      </ul>
    </header>
    <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-600"
        >
          <MenuIcon />
        </button>
      </div>
      {/* Overlay for the mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 z-10"
          onClick={toggleMobileMenu}
        ></div>
      )}
      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-60'} transition-transform duration-300 z-20`}
      >
        <ul className="p-4 border border-gray-200 space-x-12">
          {headerIcons}
        </ul>
      </div>
      <Brand />
    </div>
  )
}

export default Header
