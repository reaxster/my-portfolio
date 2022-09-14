import React from "react";
import "./ResumeStyleSections.css";
import CustomHr from "./CustomHr";

export default ({ data, title, hrDiv }) => {
  return (
    <div className="py-2">
      <h3 className="my-2" style={{ color: "#0d53ce" }}>
        <strong>{title}</strong>
          <CustomHr color={hrDiv.color} size={hrDiv.size}/>
      </h3>
      <EducationSection data={data} />
    </div>
  );
};

const EducationSection = ({ data }) => {
  return data.map((item, index) => (
    <div key={index}>
      <div className="d-flex justify-content-between text-black">
        <div>
          <h6 style={{ color: "#0d53ce" }}>
            <strong>{item.program}</strong>
          </h6>
          <h6>
            <strong>{item.university}</strong>
          </h6>
        </div>
        <div className="text-end">
          <h6>
            <strong style={{ color: "#0d53ce" }}>
              {item.from} - {item.to}
            </strong>
          </h6>
          <h6>
            <strong>{item.location}</strong>
          </h6>
        </div>
      </div>
      <p className="text-black mb-3">{item.desc}</p>
    </div>
  ));
};
