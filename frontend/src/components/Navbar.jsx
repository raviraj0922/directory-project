import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Voice of Azamgarh
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-accent">Home</Link>
            <Link to="/directory" className="hover:text-accent">Directory</Link>
            <Link to="/search" className="hover:text-accent">Search</Link>
            <Link to="/insert_data" className="hover:text-accent">Add Listing</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/directory"
                className="hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Directory
              </Link>
              <Link
                to="/search"
                className="hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Search
              </Link>
              <Link
                to="/insert_data"
                className="hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Add Listing
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 