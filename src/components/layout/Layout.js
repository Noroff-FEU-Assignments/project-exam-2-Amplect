import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./home/Home";
import Hotels from "./hotels/Hotels";
import Contact from "./contact/Contact.component";
import Login from "./login/Login";
import HotelDetail from "./hotels/HotelDetail";
import HotelEnquiry from "./hotels/HotelEnquiry";
import Admin from "./admin/Admin";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Footer from "../Footer";
import Search from "./search/Search.component";

function Layout() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/icon-w.png"
              alt="Logo icon for Holidaze"
              width="40px"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" exact>
                <Nav.Link href="#home">Home</Nav.Link>
              </NavLink>
              <NavLink to="/hotels">
                <Nav.Link href="#link">Our hotels</Nav.Link>
              </NavLink>
              <NavLink to="/contact">
                <Nav.Link href="#link">Contact</Nav.Link>
              </NavLink>
              <NavLink to="/login">
                <Nav.Link href="#link">Log in</Nav.Link>
              </NavLink>
            </Nav>
            <div className="d-flex">
              <Search />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="container__site">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hotels/:id" element={<HotelDetail />} />
          <Route path="/hotels/:id/enquiry" element={<HotelEnquiry />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default Layout;
