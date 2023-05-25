import { Col, Image, Row } from "react-bootstrap";
import { threeBlockStrip } from "../data";

const index = () => {
  return (
    <>
      <Row className="mt-4">
        {threeBlockStrip.map((elem, i) => (
          <Col lg={4} key={i}>
            <Image fluid src={elem.img} alt={elem.heading} />
            <h6 className="text-center fw-bold mt-3">{elem.heading}</h6>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default index;
