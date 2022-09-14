import React from "react";
import "./Wrapper.css";

export default ({ children, className }) => {
  return (
    <div className={`wrapper ${className ? className : ""}`}>{children}</div>
  );
};
