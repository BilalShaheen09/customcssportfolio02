import React from 'react';
import "../css-files/hero.css";
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm Bilal Shaheen</h1>
          <p className="hero-description">
            Passionate web developer dedicated to crafting modern, responsive, and visually stunning websites. With a keen eye for design and a love for clean, user-friendly code.
          </p>
          <Link href="https://github.com/BilalShaheen09">
            <button className="cta-button">Explore My Work</button>
          </Link>
        </div>
        <div className="hero-image-container">
          <Image 
            src="/images/bilal.png" 
            alt="Bilal Shaheen" 
            width={400} 
            height={400} 
            className="hero-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
