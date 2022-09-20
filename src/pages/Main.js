import React from "react";
import _Button from "../components/Buttons/_Button";
import Wrapper from "../components/Wrapper/Wrapper";
import ProfilePic from "../assets/imgs/profile2.jpg";
import "./style.css";

export default () => {
  return (
    <Wrapper className="container-lg my-5 mx-2 p-lg-3 m-lg-5">
      <div>
        <div className="d-flex flex-column align-items-stretch justify-content-between  ">
          <div className=" d-flex flex-column align-items-center flex-lg-row align-items-lg-stretch justify-content-lg-between ">
            <div className=" profilePicBorder mt-4 mt-lg-0 ">
              <img
                className="w-100 h-100 profilePic"
                src={ProfilePic}
                alt="Profile Image"
              />
            </div>
            <div className="mx-2" />
            <div className="  text-start w-75 bg-white mt-5 mt-lg-0 w-100 text-black">
              <h1>
                <strong>My Portfolio</strong>
                <hr className="w-25" />
              </h1>
              <h5 className="mt-4">
                <strong>A bit About Myself</strong>
              </h5>
              <p>
                IT Systems Manager for 2 years, with experience in Web
                Development and Data Science with focus on Machine Learning and
                Artificial Intelligence. My background in different areas of
                technology makes me the ideal candidate for any company that
                would like to utilize my skills and expertise. I consider myself
                a "forever student" eager to both build on my academic
                foundations in Data Science and Software Development, while
                staying in tune with the latest technology updates throughout
                continued coursework.
              </p>
              <p>
                My hunger for knowledge and determination to turn information
                into action has contributed to my most recent success at Faena
                Hotel, where I am in charge of developing the Faena Ultimate
                Tool website which integrates a variety of features to make
                technology automated and more accessible to those who are not
                yet familiar with processes and SOPs.
              </p>
              {/* <p>
                I believe mindfulness in the workplace is key to success. I am
                also currently working at freelancer, and I am always interested
                in new challenges.
              </p>*/}
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
