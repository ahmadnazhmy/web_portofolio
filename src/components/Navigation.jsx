import React, { useState, useEffect } from 'react'; // Tambahkan useEffect di sini
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

const Navigation = () => {
  const scrollDirection = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close menu on mobile after navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 w-full bg-[#1B1B1B] text-[#9C9C9C] z-50 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className='max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8'>
        <div className='hidden md:flex space-x-10'>
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className='hover:text-[#7F7F7F] transition-colors duration-300'>Home</a>
          <a href="#about-me" onClick={(e) => handleNavClick(e, '#about-me')} className='hover:text-[#7F7F7F] transition-colors duration-300'>About Me</a>
          <a href="#case-studies" onClick={(e) => handleNavClick(e, '#case-studies')} className='hover:text-[#7F7F7F] transition-colors duration-300'>Case Studies</a>
          <a href="#get-in-touch" onClick={(e) => handleNavClick(e, '#get-in-touch')} className='hover:text-[#7F7F7F] transition-colors duration-300'>Feedback</a>
        </div>
        <a 
          href="https://www.linkedin.com/in/ahmadnazhmy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-2xl hover:text-[#7F7F7F] transition-colors duration-300'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <button className='md:hidden text-2xl' onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center space-y-4 py-4'>
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className='hover:text-[#7F7F7F] transition-colors duration-300'>Home</a>
          <a href="#about-me" onClick={(e) => handleNavClick(e, '#about-me')} className='hover:text-[#7F7F7F] transition-colors duration-300'>About Me</a>
          <a href="#case-studies" onClick={(e) => handleNavClick(e, '#case-studies')} className='hover:text-[#7F7F7F] transition-colors duration-300'>Case Studies</a>
          <a href="#get-in-touch" onClick={(e) => handleNavClick(e, '#get-in-touch')} className='hover:text-[#7F7F7F] transition-colors duration-300'>Feedback</a>
        </div>
      )}
    </div>
  );
};

export default Navigation;
