import { Button, Col, Container, Row } from "react-bootstrap";

const index = () => {
  return (
    <>
      <Container fluid className="bg-info py-5">
        <Container>
          <Row>
            <Col md={9}>
              <h3 className="text-white fw-bold">
                One-stop Electronic Shelf Label Provider
              </h3>
            </Col>
            <Col md={3}>
              <Button
                href="/solutions"
                variant="outline-light"
                className="w-100"
              >
                More Solutions
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default index;
