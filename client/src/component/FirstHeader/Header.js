import React, { useState } from "react";
import Search from "../FirstHeader/Search";
import { BiCartDownload, BiLogIn } from "react-icons/bi";
import { CiShare1 } from "react-icons/ci";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let navigate = useNavigate();
  const headerIcon = [
    {
      Icon: null,
    },
    {
      Icon: null,
    },
    {
      Icon: <CiShare1 />,
    },
    {
      Icon: <BiCartDownload />,
    },
    {
      Icon: (
        <BiLogIn
          onClick={() => navigate("/register")}
          className='cursor-pointer'
          title='Login'
        />
      ),
    },
  ];

  const Icons = headerIcon.map((item, index) => (
    <li key={index}>{item.Icon}</li>
  ));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className='flex bg-gray-900 space-x-4 justify-between py-2 px-4'>
        {/* logo and search bar */}
        <div className='flex justify-around  space-x-20'>
          <img
            src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg'
            alt='logo_'
            className='w-12 h-12 ms-8 shadow-lg rounded-sm'
          />
          <Search className='ms-12' />
          <div className='mx-3 m-auto w-[60rem] items-center justify-center '>
            <ul className=' flex justify-center gap-[13rem] items-center w-full p-5 '>
              <li
                className='uppercase text-xl text-slate-200 font-serif hover:underline hover:cursor-pointer hover:text-gray-600 '
                onClick={() => {
                  navigate("/new_arrival");
                }}>
                new arrival
              </li>
              <li className='uppercase text-xl text-slate-200 font-serif hover:underline hover:cursor-pointer hover:text-gray-600'>
                new Models
              </li>
              <li className='uppercase text-xl text-slate-200 font-serif hover:underline hover:cursor-pointer hover:text-gray-600 '>
                Latest Model
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex text-white font-bold text-2xl items-center space-x-12 mt-4 md:mt-0'>
          {Icons}
        </ul>
      </header>
      {/* mobile sidemenu barIcon */}
      <div className='md:hidden '>
        <button onClick={toggleMobileMenu} className='p-2 text-gray-600'>
          <MenuIcon />
        </button>
      </div>
      {/* Overlay for the mobile menu */}
      {isMobileMenuOpen && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 z-10'
          onClick={toggleMobileMenu}></div>
      )}
      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-60"
        } transition-transform duration-300 z-20`}>
        <ul className='p-4 border border-gray-200 space-x-12'>{Icons}</ul>
      </div>
    </>
  );
}

export default Header;
