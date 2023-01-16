import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    // default mb-12 py-6
    <header className="py-4 mb-4 border-b">
      {/* logo */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="">
          <img src={Logo} alt="logo" />
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="">
            Login
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg"
            to=""
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
