import { Col, Row } from "react-bootstrap";
import { sixBlockStrip } from "../data";

const index = () => {
  return (
    <>
      <Row className="mt-5">
        {sixBlockStrip.map((elem, i) => (
          <Col lg={2} className="text-center" key={i}>
            <div className="text-info">
              <i className={elem.icon} style={{ fontSize: "40px" }}></i>
            </div>
            <h6 className="mt-3">{elem.heading}</h6>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default index;
