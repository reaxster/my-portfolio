import React from "react";
import "./ResumeStyleSections.css";
import CustomHr from "./CustomHr";
import TouchAppIcon from "@mui/icons-material/TouchApp";

export default ({ data, hrDiv, url }) => {
  return (
    <div className="py-2">
      <h3 className="my-3" style={{ color: "#0d53ce" }}>
        <strong>Projects</strong>
        <CustomHr color={hrDiv.color} size={hrDiv.size} />
      </h3>
      <div className=" d-flex flex-wrap flex-column">
        {data.map((item, index) => (
          <div key={index} className="mb-3">
            <h6 style={{ color: "#0d53ce" }}>
              <strong>{item.name}</strong>
            </h6>
            <p className="text-black">
              {item.desc}{" "}
              {item.url ? (
                <div>
                  <a
                    style={{ color: "#0d53ce" }}
                    href={item.url}
                    className="clickMeProject"
                    target="_blank"
                  >
                    <strong>
                      <TouchAppIcon /> Click Here For More Info <TouchAppIcon />
                    </strong>
                  </a>
                </div>
              ) : (
                ""
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
