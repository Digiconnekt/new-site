import { Col, Container, Image, Row } from "react-bootstrap";

const index = () => {
  return (
    <>
      <Container className="my-5">
        <h1 className="text-center fw-bold display-3 text-danger">
          Page Not Found
        </h1>
        <Row className="justify-content-center">
          <Col sm={8}>
            <Image fluid src="../../../error.jpg" alt="Page Not Found" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
