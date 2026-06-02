import React from "react";

const SkillsBox = ({ title, skills }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>
      <div className="skills__box ">
        <div className="skills__group h-full">
          {skills.map((skill) => (
            <div className="skills__data" key={skill.name}>
              <i className="uil uil-check-circle"></i>
              <div className="flex flex-col items-center justify-center gap-1 h-full">
                <h3 className="skills__name text-center">{skill.name}</h3>
                {skill.level && (
                  <span className="skills__level">{skill.level}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsBox;
