import { Col, Container, Row } from "react-bootstrap";
import {
  footerClassifications,
  footerServices,
  footerSocialMedia,
} from "./data";
import FooterForm from "./FooterForm";

const index = () => {
  return (
    <>
      <Container fluid className="bg-light">
        <Container className="py-5">
          <Row>
            <Col>
              <h4 className="text-uppercase mb-3">We Offer</h4>
              <div className="d-flex flex-column gap-3">
                {footerServices.map((elem, i) => (
                  <div className="d-flex align-items-center" key={i}>
                    <i className={elem.icon} style={{ fontSize: "25px" }}></i>
                    {elem.heading}
                  </div>
                ))}
              </div>
            </Col>

            <Col>
              <h4 className="text-uppercase mb-3">Classification</h4>
              <div className="d-flex flex-column gap-3">
                {footerClassifications.map((elem, i) => (
                  <div key={i}>
                    <a
                      href={elem.href}
                      className="text-decoration-none text-black"
                    >
                      {elem.heading}
                    </a>
                  </div>
                ))}
              </div>
            </Col>

            <Col>
              <h4 className="text-uppercase mb-3">Get In Touch</h4>
              <FooterForm size="sm" marginBottom="mb-2" />
            </Col>

            <Col>
              <h4 className="text-uppercase mb-3">Contact Us</h4>
              <ul className="d-flex items-center gap-3 list-inline mb-0">
                {footerSocialMedia.map((elem, i) => (
                  <li key={i}>
                    <a href={elem.href} className="text-black">
                      <i className={elem.icon} style={{ fontSize: "20px" }}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className="py-2"
        style={{ borderTop: "1px solid rgb(209 209 209)" }}
      >
        <p className="text-center mb-0">Copyright &copy; 2023</p>
      </Container>
    </>
  );
};

export default index;
