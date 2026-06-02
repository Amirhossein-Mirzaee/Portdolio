import React from "react";
import "./skills.css";
import SkillsBox from "./SkillsBox";

const technicalSkills = [
  { name: "React.js", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "JavaScript (ES6+)", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "CSS Modules", level: "Advanced" },
  { name: "Material UI / Ant Design", level: "Advanced" },
  { name: "HTML / CSS", level: "Advanced" },
  { name: "Git", level: "Advanced" },
  { name: "Vite", level: "Advanced" },
];

const expertise = [
  { name: "WebSockets & Real-time Data" },
  { name: "REST APIs / Axios" },
  { name: "React Query / TanStack Query" },
  { name: "Monorepo Architecture" },
  { name: "Component Library Design" },
  { name: "Recharts / Chart.js" },
  { name: "Jest / Cypress" },
  { name: "Swagger API Automation" },
  { name: "Agile / Scrum" },
  { name: "Responsive Design" },
];

const Skills = () => {
  return (
    <section className="skills section px-4" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container grid">
        <SkillsBox title="Technical Skills" skills={technicalSkills} />
        <SkillsBox title="Expertise" skills={expertise} />
      </div>
    </section>
  );
};

export default Skills;
