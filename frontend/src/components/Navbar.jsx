import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4 px-8">
          <Link to="/" className="flex items-center ">
            <img src="/logo.png" alt="" className='w-20'/>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-civic-purple font-medium">Home</Link>
            <Link to="/report" className="text-gray-600 hover:text-civic-purple font-medium">Report Issue</Link>
            <Link to="/my-reports" className="text-gray-600 hover:text-civic-purple font-medium">My Reports</Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-civic-purple font-medium">Welcome, {user.name}</span>
                <button 
                  onClick={onLogout}
                  className="text-gray-600 hover:text-civic-purple font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-primary">Login</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-civic-purple focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-civic-purple py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/report" 
                className="text-gray-600 hover:text-civic-purple py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Report Issue
              </Link>
              <Link 
                to="/my-reports" 
                className="text-gray-600 hover:text-civic-purple py-2 px-4 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                My Reports
              </Link>
              {user ? (
                <>
                  <span className="text-civic-purple py-2 px-4 font-medium">Welcome, {user.name}</span>
                  <button 
                    onClick={() => {
                      onLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-600 hover:text-civic-purple py-2 px-4 font-medium text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="btn-primary mx-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
