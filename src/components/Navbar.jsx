import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/guvi-logo.png"

const NavBar = () => {
    
    return (
      <Navbar expand="lg" className="navbar-css px-3">
        <Container fluid className="container-nav">
          <Navbar.Brand>
            <img
              src={logo}
              width="100"
              className="d-inline-block"
              alt="navbrand-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 navItems"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to="/"
                className="navlink linkstyle"
                style={({isActive}) => ({color: isActive ? '#0dba4b' : '#212529'})}
              >
                HOME
              </NavLink>

              <NavLink
                to="/fullstackdevelopment"
                className="navlink linkstyle"
                style={({isActive}) => ({color: isActive ? '#0dba4b' : '#212529'})}
              >
                FULL STACK DEVELOPMENT
              </NavLink>

              <NavLink
                to="/datascience"
                className="navlink linkstyle"
                style={({isActive}) => ({color: isActive ? '#0dba4b' : '#212529'})}
              >
                DATA SCIENCE
              </NavLink>

              <NavLink
                to="/cybersecurity"
                className="navlink linkstyle"
                style={({isActive}) => ({color: isActive ? '#0dba4b' : '#212529'})}
              >
                CYBER SECURITY
              </NavLink>

              <NavLink
                to="/career"
                className="navlink linkstyle"
                style={({isActive}) => ({color: isActive ? '#0dba4b' : '#212529'})}
              >
                CAREER
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;
