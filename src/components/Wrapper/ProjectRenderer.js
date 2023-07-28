import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
const ProjectRenderer = ({ data }) => {
  return data.map((item, index) => {
    return (
      <MDBCard
        key={index}
        style={{ width: "20rem" }}
        className="mx-2 mb-5 d-flex flex-column align-items-stretch pb-3"
      >
        <MDBCardBody>
          <MDBCardTitle className="text-center">
            <strong>{item.name}</strong>
          </MDBCardTitle>
          <hr />
          <MDBCardText>{item.desc}</MDBCardText>
        </MDBCardBody>
        <div className="w-100 d-flex flex-row justify-content-center">
          {item.url && (
            <a href={item.url} target="_blank">
              <MDBBtn>More Details</MDBBtn>
            </a>
          )}
        </div>
      </MDBCard>
    );
  });
};

export default ProjectRenderer;
