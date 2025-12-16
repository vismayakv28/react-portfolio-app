import React from "react";
import {
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaPaperPlane,
} from "react-icons/fa";
import "./Home.css";

export default function Home() {
    return (
        <>
            {/* Navbar */}
            <header className="navbar">
                <div className="logo">Vismaya K V</div>

                <nav className="nav-links">
                    <a className="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#qualification">Qualification</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="home" id="home">
                {/* Social Icons */}
                <div className="socials">
                    <a href="https://www.linkedin.com/in/vismaya-kv-ab253b365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
                    <a href="https://github.com/"><FaGithub /></a>
                    <a href="https://www.instagram.com/wisherrreee?igsh=NmE0YTg3ZzNtN25w"><FaInstagram /></a>
                </div>

                {/* Content */}
                <div className="home-content">
                    <h1>
                        Vismaya K V 
                    </h1>

                    <h3>Frontend Developer</h3>

                    <p>
                        Iam a passionate Java Full Stack Developer currently pursuing full-stack development, with a strong foundation in modern front-end technologies. I’ve already completed my front-end training and built several responsive, user-friendly projects using React, JavaScript,etc. I’m now expanding my skills into backend development with Java, Spring Boot, and REST APIs to become a complete full-stack engineer.
                    </p>

                    <a href="#contact" className="btn-primary">
                        Say Hello 
                    </a>
                </div>

                {/* Profile Image */}
                <div className="home-image">
                    <img src="public/vichu.jpg" alt="Vismay K V" />
                </div>


            </section>
        </>
    );
}