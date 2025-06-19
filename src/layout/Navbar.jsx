import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logos-02.png';
import colors from '../config/colors';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileInsuranceOpen, setMobileInsuranceOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const primaryColor = colors.primary;
  const secondaryColor = colors.secondary;

  const navItems = [
    { name: 'Home', path: '#' },
    { 
      name: 'Insurance', 
      path: '#',
      dropdown: [
        { name: 'Auto Insurance', path: '#auto' },
        { name: 'Medical Insurance', path: '#medical' },
        { name: 'Financial Insurance', path: '#financial' },
        { name: 'Business Insurance', path: '#business' }
      ]
    },
    { name: 'POPI', path: '#popi' },
    { name: 'Opt In/Out', path: '#opt' },
    { name: 'Contact', path: '#contact' }
  ];

  // Handle dropdown hover with delay for better UX
  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 200); // Small delay to prevent flickering
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
        setMobileInsuranceOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setMobileInsuranceOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img 
              src={logo} 
              alt="Savewise Logo" 
              className="h-8 w-24 sm:h-10 sm:w-32 transition-transform duration-300 hover:scale-105" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.path}
                  className={`relative px-4 py-2 text-sm xl:text-base font-medium cursor-pointer transition-all duration-300 rounded-md hover:bg-gray-50 ${
                    activeIndex === index ? 'text-opacity-100' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={activeIndex === index ? { color: primaryColor } : {}}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg 
                      className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>

                {/* Desktop Dropdown */}
                {item.dropdown && activeIndex === index && (
                  <div 
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 transform opacity-100 scale-100 transition-all duration-200 ease-out"
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-opacity-50"
                        style={{
                          ':hover': {
                            borderLeftColor: primaryColor
                          }
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderLeftColor = primaryColor;
                          e.currentTarget.style.color = primaryColor;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderLeftColor = 'transparent';
                          e.currentTarget.style.color = '#374151';
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            {/* Desktop FREE QUOTE button */}
            <button
              className="hidden lg:block relative cursor-pointer overflow-hidden group text-white px-4 xl:px-6 py-2 rounded-lg text-sm xl:text-base font-semibold shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              style={{ backgroundColor: primaryColor }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = secondaryColor}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = primaryColor}
            >
              <span className="relative z-10">FREE QUOTE</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none transition-all duration-200 mobile-menu-container"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setMobileInsuranceOpen(false);
              }}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`} />
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden mobile-menu-container overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
            {navItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.path}
                    className="flex-1 block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
                    style={{
                      ':hover': { color: primaryColor }
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = primaryColor;
                      e.currentTarget.style.backgroundColor = '#f9fafb';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#374151';
                      e.currentTarget.style.backgroundColor = '';
                    }}
                  >
                    {item.name}
                  </a>
                  
                  {/* Mobile dropdown toggle */}
                  {item.dropdown && (
                    <button
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                      onClick={() => setMobileInsuranceOpen(!mobileInsuranceOpen)}
                    >
                      <svg 
                        className={`w-5 h-5 transform transition-transform duration-200 ${
                          mobileInsuranceOpen ? 'rotate-180' : ''
                        }`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Mobile dropdown items */}
                {item.dropdown && (
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileInsuranceOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-6 space-y-1 mt-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.path}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200 border-l-2 border-transparent"
                          onMouseEnter={e => {
                            e.currentTarget.style.color = primaryColor;
                            e.currentTarget.style.borderLeftColor = primaryColor;
                            e.currentTarget.style.backgroundColor = '#f9fafb';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.color = '#4b5563';
                            e.currentTarget.style.borderLeftColor = 'transparent';
                            e.currentTarget.style.backgroundColor = '';
                          }}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile FREE QUOTE button */}
            <div className="pt-3 border-t border-gray-100 mt-3">
              <button
                className="w-full cursor-pointer relative overflow-hidden group text-white px-4 py-3 rounded-lg text-base font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: primaryColor }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = secondaryColor}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = primaryColor}
              >
                <span className="relative z-10">GET FREE QUOTE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;