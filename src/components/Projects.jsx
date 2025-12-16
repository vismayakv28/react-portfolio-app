import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
    {
        id: 1,
        title: "Double C&B",
        category: "Web",
        img: "dbb.jpg",
        demo: "#",
    },
    {
        id: 2,
        title: "",
        category: "App",
        img: "pet.jpeg",
        demo: "#",
    },
    {
        id: 3,
        title: "Starbucks",
        category: "Web",
        img: "star.jpg",
        demo: "#",
    },
    {
        id: 4,
        title: "Plant UI",
        category: "App",
        img: "plant.jpg",
        demo: "#",
    },
    {
        id: 5,
        title: "Todo App",
        category: "App",
        img: "todo.jpg",
        demo: "#",
    },
    {
        id: 6,
        title: "Portfolio",
        category: "Web",
        img: "portfolio.jpg",
        demo: "#",
    },
];

export default function Projects() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projectsData
            : projectsData.filter((p) => p.category === active);

    return (
        <section className="projects">
            {/* Heading */}
            <div className="projects-header">
                <h2>Project</h2>
                <p>Most recent works</p>
            </div>

            {/* Filters */}
            <div className="projects-filters">
                {["All", "Web", "App"].map((item) => (
                    <button
                        key={item}
                        className={active === item ? "active" : ""}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="projects-grid">
                {filtered.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.img} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <a href={project.demo}>
                                Demo <span>→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}