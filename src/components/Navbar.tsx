import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="flex items-center space-x-2 text-blue-400 font-bold text-xl"
          onClick={closeMenu}
        >
          <Code size={24} />
          <span>DevPortfolio</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `transition hover:text-blue-400 ${isActive ? 'text-blue-400 font-medium' : 'text-gray-300'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `transition hover:text-blue-400 ${isActive ? 'text-blue-400 font-medium' : 'text-gray-300'}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({isActive}) => 
              `transition hover:text-blue-400 ${isActive ? 'text-blue-400 font-medium' : 'text-gray-300'}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `transition hover:text-blue-400 ${isActive ? 'text-blue-400 font-medium' : 'text-gray-300'}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-blue-400 transition z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-gray-800 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `text-gray-300 hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-medium' : ''}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `text-gray-300 hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-medium' : ''}`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({isActive}) => 
              `text-gray-300 hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-medium' : ''}`
            }
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `text-gray-300 hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-medium' : ''}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;