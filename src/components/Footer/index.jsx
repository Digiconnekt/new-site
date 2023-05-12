import { Col, Container, Row } from "react-bootstrap";

const index = () => {
  return (
    <>
      <Container fluid className="bg-light">
        <Container>
          <Row>
            <Col>fast quote</Col>
            <Col>classification</Col>
            <Col>Keep in touch</Col>
            <Col>Contact Us</Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default index;
