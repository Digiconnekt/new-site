import { Col, Container, Row } from "react-bootstrap";
import FooterForm from "../../components/Footer/FooterForm";
import PageHeadingBanner from "../../components/PageHeadingBanner";
import MoreSolutions from "../../components/MoreSolutions";

const index = () => {
  return (
    <>
      <PageHeadingBanner title="Contact Us" />

      <Container className="py-5">
        <Row>
          <Col lg={6}>
            <h4 className="text-uppercase text-center mb-3 fw-bold">
              Get In Touch
            </h4>
            <FooterForm size="md" marginBottom="mb-3" />
          </Col>
          <Col lg={6}>
            <h4 className="text-uppercase text-center mb-3 fw-bold">
              Contact Us
            </h4>

            <Row>
              <Col lg={8} className="mx-auto">
                <Row className="align-items-center">
                  <Col sm={2}>
                    <i
                      className="fa-solid fa-envelope"
                      style={{ fontSize: "22px" }}
                    ></i>
                  </Col>
                  <Col sm={1} className="fw-bold">
                    :
                  </Col>
                  <Col sm={9}>
                    <a href="" className="text-decoration-none text-black">
                      info@xyz.com
                    </a>
                    <span className="mx-3">/</span>
                    <a href="" className="text-decoration-none text-black">
                      info@xyz.com
                    </a>
                  </Col>
                </Row>

                <Row className="mt-3 align-items-center">
                  <Col sm={2}>
                    <i
                      className="fa-solid fa-phone"
                      style={{ fontSize: "22px" }}
                    ></i>
                  </Col>
                  <Col sm={1} className="fw-bold">
                    :
                  </Col>
                  <Col sm={9}>
                    <a href="" className="text-decoration-none text-black">
                      9856325968
                    </a>
                    <span className="mx-3">/</span>
                    <a href="" className="text-decoration-none text-black">
                      9856325968
                    </a>
                  </Col>
                </Row>

                <Row className="mt-3 align-items-center">
                  <Col sm={2}>
                    <i
                      className="fa-brands fa-whatsapp fw-bold"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </Col>
                  <Col sm={1} className="fw-bold">
                    :
                  </Col>
                  <Col sm={9}>
                    <a href="" className="text-decoration-none text-black">
                      9856325968
                    </a>
                  </Col>
                </Row>

                <Row className="mt-3 align-items-center">
                  <Col sm={2}>
                    <i
                      className="fa-brands fa-facebook-messenger"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </Col>
                  <Col sm={1} className="fw-bold">
                    :
                  </Col>
                  <Col sm={9}>
                    <a href="" className="text-decoration-none text-black">
                      https://m.me/107199337307164
                    </a>
                  </Col>
                </Row>

                <Row className="mt-3 align-items-center">
                  <Col sm={2}>
                    <i
                      className="fa-brands fa-linkedin-in"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </Col>
                  <Col sm={1} className="fw-bold">
                    :
                  </Col>
                  <Col sm={9}>
                    <a href="" className="text-decoration-none text-black">
                      https://m.me/107199337307164
                    </a>
                  </Col>
                </Row>

                <Row className="mt-3 align-items-center">
                  <Col sm={2}>
                    <i
                      className="fa-brands fa-twitter"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </Col>
                  <Col sm={1} className="fw-bold">
                    :
                  </Col>
                  <Col sm={9}>
                    <a href="" className="text-decoration-none text-black">
                      https://m.me/107199337307164
                    </a>
                  </Col>
                </Row>

                <Row className="mt-3 align-items-center">
                  <Col sm={2}>
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </Col>
                  <Col sm={1} className="fw-bold">
                    :
                  </Col>
                  <Col sm={9}>
                    <a href="" className="text-decoration-none text-black">
                      No.17 Gonghua Street,Shahekou District ,Dalian, Singapore
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <MoreSolutions />
    </>
  );
};

export default index;
