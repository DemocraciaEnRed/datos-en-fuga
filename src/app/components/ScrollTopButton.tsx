'use client'
import { useState, useEffect } from 'react';
import ChevronSVG from './ChevronSVG';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: any;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 200;
      setIsVisible(isScrolled);
      if (isScrolled) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 1500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId)
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-9 right-9 transition-opacity ease-in-out delay-200 ${isVisible ? 'opacity-95' : 'opacity-0 pointer-events-none'}`}>
      <button onClick={scrollToTop} className="bg-white outline outline-1 outline-black p-2 rounded-full shadow-md">
        <ChevronSVG direction='up' color='red' size={8} />
      </button>
    </div>
  );
};

export default ScrollTopButton;