import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <Navbar bg="dark" collapseOnSelect expand="lg" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="home#banner">
          Knowledge Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Purposes</Nav.Link>
            <Nav.Link href="">Stock</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
            {
            user ? 
              <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Log out</button>
            : 
              <Nav.Link as={Link} to="Login">
                Login
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
