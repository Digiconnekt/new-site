import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      {/* top bar start (social icons) */}
      <div className="py-1 bg-light">
        <Container>
          <div className="d-flex justify-content-between items-center">
            <ul className="d-flex items-center gap-2 list-inline mb-0">
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>

            <ul className="d-flex items-center gap-2 list-inline mb-0">
              <li>
                <a href="" className="text-decoration-none">
                  <i className="fa-solid fa-phone me-1"></i>
                  +917725693545
                </a>
              </li>
              <li>|</li>
              <li>
                <a href="" className="text-decoration-none">
                  <i className="fa-solid fa-envelope me-1"></i>
                  info@xyz.com
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* top bar end (social icons) */}

      {/* middle bar start (logo) */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex ms-lg-auto mt-3 mt-lg-0 w-75">
              <Form.Control
                type="search"
                placeholder="Search for a Part Number or Series Number"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            <Nav className="ms-auto d-lg-none">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* middle bar end (logo) */}

      {/* bottom bar start (menu) */}
      <Navbar
        bg="light"
        className="d-none d-lg-block position-sticky top-0"
        style={{ zIndex: "99999" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-between">
              <NavLink to="/" className="nav-link ps-0">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
              <NavLink to="/pick-to-light" className="nav-link">
                Pick To Light
              </NavLink>

              {/* products */}
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>

              {/* solutions */}
              <NavLink to="/solutions" className="nav-link">
                Solutions
              </NavLink>

              {/* service */}
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavLink to="/services" className="dropdown-item">
                  Services
                </NavLink>
                <NavLink to="/download" className="dropdown-item">
                  Download Technical Documents
                </NavLink>
                <NavLink to="/simple-purchasing" className="dropdown-item">
                  Simple Purchasing
                </NavLink>
              </NavDropdown>

              {/* blogs */}
              <NavDropdown title="Blogs" id="basic-nav-dropdown">
                <NavLink to="/blogs" className="dropdown-item">
                  Blogs
                </NavLink>
                <NavLink to="/company-news" className="dropdown-item">
                  Company News
                </NavLink>
                <NavLink to="/industry-news" className="dropdown-item">
                  Industry News
                </NavLink>
              </NavDropdown>

              {/* cases */}
              <NavDropdown title="Cases" id="basic-nav-dropdown">
                <NavLink to="/cases" className="dropdown-item">
                  Cases
                </NavLink>
                <NavLink to="/sertag-europe" className="dropdown-item">
                  Sertag Europe
                </NavLink>
                <NavLink to="/sertag-china" className="dropdown-item">
                  Sertag China
                </NavLink>
              </NavDropdown>

              {/* faq */}
              <NavDropdown title="FAQ" id="basic-nav-dropdown">
                <NavLink to="/faq" className="dropdown-item">
                  FAQ
                </NavLink>
                <NavLink to="/wifi" className="dropdown-item">
                  Sertag Wifi
                </NavLink>
                <NavLink to="/bluetooth" className="dropdown-item">
                  Sertag Bluetooth
                </NavLink>
              </NavDropdown>

              <NavLink to="/contact" className="nav-link pe-0">
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* bottom bar end (menu) */}
    </>
  );
};

export default index;
