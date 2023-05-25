import { Col, Row } from "react-bootstrap";
import { fiveBlock } from "../data";

const index = () => {
  return (
    <>
      <Row className="justify-content-center gap-3 mt-3">
        {fiveBlock.map((elem, i) => (
          <Col lg={2} className="bg-info text-white text-center p-4" key={i}>
            <a href="#" className="text-white text-decoration-none">
              <div>
                <i className={elem.icon} style={{ fontSize: "35px" }}></i>
              </div>
              <h5 className="mt-3">{elem.heading}</h5>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default index;
