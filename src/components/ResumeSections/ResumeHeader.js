import React from "react";
import "./ResumeStyleSections.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import ProfilePic from "../../assets/imgs/profile2.jpg";
import CustomHr from "./CustomHr";

export default () => {
  return (
    <div className="Rheader d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-around align-items-lg-center px-2 px-lg-4">
      <div className="d-flex flex-column align-items-center mt-4 mt-lg-0 flex-lg-row justify-content-lg-start align-items-lg-center h-100  w-100">
        <img className="RheaderPic" src={ProfilePic} alt="ProfilePicture" />
      </div>
      <div className="  mt-4 mt-lg-0 h-100 d-flex flex-column justify-content-center  align-items-center text-white text-center w-100">
        <h2>
          <strong>Richar Marshall</strong>
        </h2>
        <CustomHr color="white" size="65%" />
        <h5>
          <strong>Data Scientist and Software Developer</strong>
        </h5>
      </div>
      <div className="h-100 d-flex flex-column justify-content-lg-around text-white text-center text-lg-end w-25 py-3 justify-content-center w-100">
        <div className=" d-flex flex-column  align-items-center  align-items-lg-end">
          <h4>
            <strong>Contact</strong>
            <CustomHr color="white" size="6rem" />
          </h4>
        </div>
        <h6>
          rrodr644@fiu.edu <EmailIcon />
        </h6>
        <h6>
          richard96vivi@gmail.com <EmailIcon />
        </h6>

        <h6>
          615-997-6022 <PhoneIphoneIcon />
        </h6>
        <h6>
          Miami, FL, USA <PlaceIcon />
        </h6>
        <h6>
          <a
            className="text-white"
            target="_blank"
            href="https://www.linkedin.com/in/richar-marshall-665559127/"
          >
            LinkedIn <strong>(Click Me)</strong> <LinkedInIcon />
          </a>
        </h6>
        <h6>
          <a
            className="text-white"
            target="_blank"
            href="https://github.com/reaxster"
          >
            GitHub <strong>(Click Me)</strong> <GitHubIcon />
          </a>
        </h6>
      </div>
    </div>
  );
};
