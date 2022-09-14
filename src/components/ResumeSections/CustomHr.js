import React   from "react";
import "./ResumeStyleSections.css";

export default ({size, color}) => {
    return <div className="customHRDiv" style={{borderColor: color, width: size}}/>
}