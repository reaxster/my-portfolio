import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarLink,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import "./Header.css";

export default () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar expand="lg" bgColor="light" className="MDBNavbar">
      <MDBContainer fluid className="MDBContainer">
        <Link to="/">
          <MDBNavbarBrand className="menuHeader2">
            <HomeIcon /> Richar Marshall
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          onClick={() => setShowBasic(!showBasic)}
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon style={{ fontSize: "5rem", color: "white" }} />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav
            right
            className="mb-2 mb-lg-0 d-flex justify-content-end"
          >
            <Wrapper link="/resume" sub="Resume" next />
            <Wrapper link="/data-science" sub="Data Science" next />
            <Wrapper
              link="/software-developer"
              sub="Software Development"
              next
            />
            <Wrapper link="/contact" sub="Contact" />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

const Wrapper = ({ link, sub, next }) => {
  return (
    <MDBNavbarItem>
      <Link className="text-white menuHeader mx-4 mx-lg-1" to={link}>
        <strong>{sub}</strong>
      </Link>
      {next && <DoubleArrowIcon id="fadeshow1" className="text-white" />}
    </MDBNavbarItem>
  );
};
