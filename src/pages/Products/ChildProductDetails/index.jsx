import { Col, Container, Row } from "react-bootstrap";
import { products } from "../data";
import { NavLink, useParams } from "react-router-dom";

const ChildProductDetails = () => {
  const { parentProduct, childProduct } = useParams();
  console.log(
    "🚀 ~ file: index.jsx:7 ~ ChildProductDetails ~ parentProduct:",
    parentProduct
  );
  console.log(
    "🚀 ~ file: index.jsx:7 ~ ChildProductDetails ~ childProduct:",
    childProduct
  );

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col lg={3}>
            <h5 className="fw-bold">Categories</h5>
            <ul className="list-inline mt-3">
              {products.map((elem, i) => (
                <li key={i}>
                  <NavLink
                    to={elem.parentProductHref}
                    className="text-decoration-none text-black"
                    title={elem.parentProductTitle}
                  >
                    <i className="fa-solid fa-caret-right me-1"></i>
                    {elem.parentProductTitle.length > 35
                      ? elem.parentProductTitle.slice(0, 35) + "..."
                      : elem.parentProductTitle}
                  </NavLink>
                  <hr className="my-1" />
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={9}>
            <h1>child</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChildProductDetails;
