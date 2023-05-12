import { Col, Container, Row } from "react-bootstrap";
import { fiveGridStrip } from "./data";

const FiveGridStrip = () => {
  return (
    <>
      <Container fluid className="bg-info py-4 mb-4">
        <Container>
          <Row className="text-white">
            {fiveGridStrip.map((elem, id) => (
              <Col key={id}>
                <div className="d-flex align-items-center">
                  <i className={elem.icon} style={{ fontSize: "30px" }}></i>
                  {elem.heading}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default FiveGridStrip;
