import { Col, Container, Row } from "react-bootstrap";
import { sixBlockGrid } from "../data";

const index = () => {
  return (
    <>
      <Container className="pt-3 pb-5">
        <Row>
          {sixBlockGrid.map((elem, i) => (
            <Col lg={4} className="mt-4" key={i}>
              <h5 className="text-center border-bottom border-info pb-3">
                {elem.heading}
              </h5>
              <p className="mt-3">{elem.content}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default index;
