import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
      <Navbar bg="light" className="d-none d-lg-block">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-between">
              <Nav.Link href="/" className="ps-0">
                Home
              </Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/pick-to-light">Pick To Light</Nav.Link>

              {/* products */}
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                <NavDropdown.Item href="/retail-electronics">
                  Retail Electronics
                </NavDropdown.Item>
                <NavDropdown.Item href="/electronic-paper">
                  Electronic Paper
                </NavDropdown.Item>
              </NavDropdown>

              {/* solutions */}
              <NavDropdown title="Solutions" id="basic-nav-dropdown">
                <NavDropdown.Item href="/solutions">Solutions</NavDropdown.Item>
                <NavDropdown.Item href="/retail-electronics">
                  Retail Electronics
                </NavDropdown.Item>
                <NavDropdown.Item href="/electronic-paper">
                  Electronic Paper
                </NavDropdown.Item>
              </NavDropdown>

              {/* service */}
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                <NavDropdown.Item href="/download-technical-documents">
                  Download Technical Documents
                </NavDropdown.Item>
                <NavDropdown.Item href="/simple-purchasing">
                  Simple Purchasing
                </NavDropdown.Item>
              </NavDropdown>

              {/* blogs */}
              <NavDropdown title="Blogs" id="basic-nav-dropdown">
                <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="/company-news">
                  Company News
                </NavDropdown.Item>
                <NavDropdown.Item href="/industry-news">
                  Industry News
                </NavDropdown.Item>
              </NavDropdown>

              {/* cases */}
              <NavDropdown title="Cases" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cases">Cases</NavDropdown.Item>
                <NavDropdown.Item href="/sertag-europe">
                  Sertag Europe
                </NavDropdown.Item>
                <NavDropdown.Item href="/sertag-china">
                  Sertag China
                </NavDropdown.Item>
              </NavDropdown>

              {/* faq */}
              <NavDropdown title="FAQ" id="basic-nav-dropdown">
                <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="/sertag-wifi">
                  Sertag Wifi
                </NavDropdown.Item>
                <NavDropdown.Item href="/sertag-bluetooth">
                  Sertag Bluetooth
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/contact" className="pe-0">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* bottom bar end (menu) */}
    </>
  );
};

export default index;
