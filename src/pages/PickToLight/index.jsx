import { Col, Container, Image, Row } from "react-bootstrap";
import MoreSolutions from "../../components/MoreSolutions";
import SixBlockStrip from "./SixBlockStrip";
import ThreeBlockStrip from "./ThreeBlockStrip";
import { NavLink } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const index = () => {
  return (
    <>
      <Container className="py-5">
        <h2 className="text-center fw-bold">
          Pick To Light Warehouse Electronic Labels
        </h2>
        <Row className="mt-4">
          <Col lg={10} className="mx-auto text-center">
            <p>
              Pick to light is a type of order-fulfillment technology designed
              to improve picking accuracy and efficiency, while simultaneously
              lowering your labor costs. Notably, pick to light is paperless; it
              employs alphanumeric displays and buttons at storage locations, to
              guide your employees in light-aided manual picking, putting,
              sorting, and assembling.
            </p>
            <NavLink
              to="/contact"
              className="btn text-decoration-none btn-dark text-white px-4"
            >
              Consult
            </NavLink>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <LazyLoad height={762}>
              <Image
                fluid
                src="https://icdn.tradew.com/file/201807/1573002/png/7635022.png?x-oss-process=image/format,webp"
                alt=""
              />
            </LazyLoad>
          </Col>
          <Col md={6}>
            <LazyLoad height={762}>
              <Image
                fluid
                src="https://icdn.tradew.com/file/201807/1573002/png/7635023.png?x-oss-process=image/format,webp"
                alt=""
              />
            </LazyLoad>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light py-5">
        <Container>
          <h2 className="text-center fw-bold">
            Why Choose Digital Labels For Warehouse
          </h2>
          <SixBlockStrip />
        </Container>
      </Container>

      <Container className="py-5">
        <h2 className="text-center fw-bold">
          Different Smart Warehouse Tags Solution For Different Customers
        </h2>
        <Row className="mt-4 text-center">
          <Col lg={6}>
            <h5 className="bg-dark text-white py-2 mb-4">For Enduser</h5>
            <Image
              fluid
              src="https://icdn.tradew.com/file/201807/1573002/png/7669672.png"
              alt=""
            />
            <h5 className="mt-4 fw-bold">Whole System</h5>
          </Col>
          <Col lg={6}>
            <h5 className="bg-dark text-white py-2 mb-4">System Integrator</h5>
            <Image
              fluid
              src="https://icdn.tradew.com/file/201807/1573002/png/7669681.png"
              alt=""
            />
            <h5 className="mt-4 fw-bold">Api Interface Some Documents</h5>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <h2 className="text-center fw-bold">
          Warehouse Electronic Shelf Labels Case
        </h2>
        <ThreeBlockStrip />
      </Container>

      <MoreSolutions />
    </>
  );
};

export default index;
