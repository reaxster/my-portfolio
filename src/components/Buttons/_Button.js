import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "./_Button.css";

export default (props) => {
  const main = (
    <MDBBtn
      outline
      onClick={props.onclick}
      className="customBTN  d-flex justify-content-center align-content-center w-100 my-2 mx-lg-1"
      href={props.href}
      role="button"
    >
      <strong>{props.children}</strong>
    </MDBBtn>
  );
  const red = (
    <MDBBtn
      outline
      color="danger"
      className="customBTN"
      href="#!"
      href={props.href}
      role="button"
    >
      <strong>{props.children}</strong>
    </MDBBtn>
  );

  return props.type == "red" ? red : main;
};
