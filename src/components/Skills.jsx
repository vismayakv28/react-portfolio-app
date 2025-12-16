import React from "react";
import "./Skills.css";

// Rename this array to avoid conflict with the component name
const skillsData = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JAVASCRIPT", percent: 90 },
  { name: "GIT", percent: 80 },
  { name: "BOOTSTRAP", percent: 85 },
  { name: "REACT", percent: 88 },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
