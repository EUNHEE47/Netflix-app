/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navigation = () => {
  return (
    <Navbar fixed="top" expand="lg" variant="dark">
      <Container fluid>
        <Link to="/">
          <img
            width={100}
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/movies" className="nav-item">
              Movies
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">
              <BsSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
