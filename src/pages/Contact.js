import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SchoolIcon from "@mui/icons-material/School";
import CustomHr from "../components/ResumeSections/CustomHr";

export default () => {
  return (
    <div className="contactFormBg d-flex flex-column  align-items-center my-5 m-lg-5 p-5">
      <h3 style={{ color: "#0D53CEFF" }} className="mx-5 ">
        <strong>CONTACT INFO</strong>
        <CustomHr color="#0D53CEFF" size="100%" />
      </h3>
      <div className="h-100 d-flex flex-column  align-items-center justify-content-around">
        <div className="d-flex flex-column  align-items-center">
          <h5 style={{ color: "#0D53CEFF" }}>
            <strong>
              Address <LocationOnIcon />
              <CustomHr color="#0D53CEFF" size="100%" />
            </strong>
          </h5>
          <h5 className="text-black">Miami, Florida, USA</h5>
        </div>
        <div className="d-flex flex-column  align-items-center">
          <h5 style={{ color: "#0D53CEFF" }}>
            <strong>
              Email <MailIcon />
              <CustomHr color="#0D53CEFF" size="100%" />
            </strong>
          </h5>
          <h5 className="text-black">richard96vivi@gmail.com</h5>
        </div>
        <div className="d-flex flex-column  align-items-center">
          <h5 style={{ color: "#0D53CEFF" }}>
            <strong>
              FIU Email <SchoolIcon />{" "}
              <CustomHr color="#0D53CEFF" size="100%" />
            </strong>
          </h5>
          <h5 className="text-black">rrodr644@fiu.edu</h5>
        </div>
        <div className="d-flex flex-column  align-items-center">
          <h5 style={{ color: "#0D53CEFF" }}>
            <strong>
              Telephone <PhoneIphoneIcon />
              <CustomHr color="#0D53CEFF" size="100%" />
            </strong>{" "}
          </h5>
          <h5 className="text-black">615-997-6022</h5>
        </div>
      </div>
    </div>
  );
};
