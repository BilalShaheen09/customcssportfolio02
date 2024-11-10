import React from 'react';
import "../css-files/project.css";
import Image from 'next/image';

const Project: React.FC = () => {
    const projects = [
        {
            title: "Make Up Website",
            description: "A responsive Makeup website built with HTML, CSS, and JavaScript",
            image: "/images/makeup.jpg",
        },
        {
            title: "Perfume  Website",
            description: "An Perfume Web store built with Nextjs and Tailwind CSS",
            image: "/images/perfume.jpg",
        },
        {
            title: "My Portfolio",
            description: "A portfolio website built with Next.js and Tailwind CSS",
            image: "/images/portfolio.png",
        },
        {
            title: "Resume Builder",
            description: "A resume builder built with HTML, CSS, and JavaScript",
            image: "/images/rt.jpg",
        },
        {
            title: "Toys Website",
            description: "A Toys Web built with Next.js and Tailwind CSS",
            image: "/images/toys.jpeg",
        },
        {
            title: "Static Resume",
            description: "A Static Resume built with Next.js",
            image: "/images/cd.jpg",
        }
    ];

    return (
        <div className="projects-container">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-container">
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                width={400} 
                                height={300} 
                                className="project-image" 
                            />
                        </div>
                        <div className="project-content">
                            <h3 className="project-name">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
