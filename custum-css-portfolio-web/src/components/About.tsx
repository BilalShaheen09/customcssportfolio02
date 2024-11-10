import React from 'react';
import "../css-files/about.css"
import Link from 'next/link';

const AboutPage: React.FC = () => {
    return (
        <div className="about-container">
            <div className="about-card">
                <div className="about-image"></div>
                <div className="about-content">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">
                    
Hi, I'm Bilal Shaheen, a passionate web developer with a focus on creating pixel-perfect, responsive, and visually stunning designs. I specialize in building modern, user-centric websites that deliver exceptional user experiences across all devices.

With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I combine technical skills with creativity to craft websites that are not only beautiful but also functional. Every project I work on is driven by the belief that great design is both visually appealing and highly usable. I pay close attention to details, ensuring that every pixel is perfectly aligned and that each website is optimized for performance and speed.




                    </p>
                    <p className="about-description">
                    My goal is to make sure that every website I create is seamless, intuitive, and easy to navigate. Whether it's a personal portfolio, a corporate site, or a custom web app, I focus on delivering a product that exceeds expectations.

If you’re looking for a web developer who values quality, precision, and creativity, I’d love to collaborate with you. Let’s bring your ideas to life and create something extraordinary together.
                    </p>
                    <Link href="/Project"><button className="explore-button">View My Projects</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
