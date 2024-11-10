


// components/Navbar.tsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import "../css-files/navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle open state
  };

  return (
    <header className="navbar">
      <div className="container">
        <a className="brand">
          <span className="brand-text">PORTFOLIO WEB</span>
        </a>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-link text-pink-600"><b>Home</b></Link>
          <Link href="/about" className="nav-link"><b>About</b></Link>
          <Link href="/Project" className="nav-link"><b>Projects</b></Link>
          <Link href="/contact" className="nav-link"><b>Contact</b></Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
