import React from "react";
import _Button from "../components/Buttons/_Button";
import Wrapper from "../components/Wrapper/Wrapper";
import ProfilePic from "../assets/imgs/profile2.jpg";
import "./style.css";

export default () => {
  return (
    <Wrapper className="container-lg my-5 mx-2 p-lg-5 m-lg-5">
      <div>
        <div className="d-flex flex-column align-items-stretch justify-content-center ">
          <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-stretch justify-content-lg-between ">
            <div className="profilePicBorder mt-4 mt-lg-0">
              <img
                className="w-100 h-100 profilePic"
                src={ProfilePic}
                alt="Profile Image"
              />
            </div>
            <div className="text-start mx-lg-5 w-75 bg-light mt-5 mt-lg-0 w-100">
              <h1>
                <strong>My Portfolio</strong>
                <hr className="w-25" />
              </h1>
              <h5 className="mt-4">
                <strong>A bit About Myself</strong>
              </h5>
              <p className="my-3 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="mt-5 d-flex flex-column flex-lg-row  justify-content-lg-between align-items-stretch ">
            <_Button href="/resume">Resume</_Button>
            <_Button href="/data-science">Data Science</_Button>
            <_Button href="/software-dev">Software Dev</_Button>
            <_Button href="/contact">Contact</_Button>
          </div>
        </div>

        <hr />
      </div>
    </Wrapper>
  );
};
