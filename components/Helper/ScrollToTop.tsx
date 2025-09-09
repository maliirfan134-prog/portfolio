'use client';
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);
// Show and hide scroll to top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
        if (window.scrollY > 300) setIsVisible(true);
        else setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);

  }, [])

  return (
    <div>
      
    </div>
  )
}

export default ScrollToTop
