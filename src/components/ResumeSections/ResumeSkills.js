import React from "react";
import "./ResumeStyleSections.css";
import CustomHr from "./CustomHr";

export default ({ data,hrDiv }) => {
  return (
    <div className="py-2">
      <h3 className="my-3" style={{ color: "#0d53ce" }}>
        <strong>Skills</strong>
          <CustomHr color={hrDiv.color} size={hrDiv.size}/>
      </h3>
      <div className=" d-flex flex-wrap  align-items-stretch">
        {data.map((item, index) => (
          <div key={index} className=" ResumeSkillsSkill">
            <h6>{item}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};
