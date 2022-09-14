import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

import "./Footer.css";

export default () => {
  return (
    <MDBFooter
      className="text-center text-white footerPos"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: "#0d45a2" }}
      >
        © 2020 Copyright:
        <a
          className="text-white"
          href="https://Richard-Portfolio.com/"
          target="_blank"
        >
          {" "}
          Richard-Portfolio.com
        </a>
      </div>
    </MDBFooter>
  );
};
