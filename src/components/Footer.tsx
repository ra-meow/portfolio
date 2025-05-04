import React from 'react';
import { Heart, Code, Github, Linkedin, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className="flex items-center space-x-2 w-fit">
              <Code size={24} className="text-blue-400" />
              <span className="font-bold text-xl">DevPortfolio</span>
            </NavLink>
            <p className="text-gray-400 max-w-xs">
              Creating elegant, functional, and responsive web experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    `text-gray-400 hover:text-blue-400 transition ${isActive ? 'text-blue-400' : ''}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({isActive}) => 
                    `text-gray-400 hover:text-blue-400 transition ${isActive ? 'text-blue-400' : ''}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  className={({isActive}) => 
                    `text-gray-400 hover:text-blue-400 transition ${isActive ? 'text-blue-400' : ''}`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({isActive}) => 
                    `text-gray-400 hover:text-blue-400 transition ${isActive ? 'text-blue-400' : ''}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@devportfolio.com</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by DevPortfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;