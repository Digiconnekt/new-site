import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { products } from "./data";

const index = () => {
  return (
    <>
      <Container className="py-5">
        {products.map((mainProd, mainProdIndex) => (
          <>
            <Row key={mainProdIndex}>
              <Col lg={3}>
                <h5 className="fw-bold">{mainProd.parentProductTitle}</h5>
                <p className="mt-3" style={{ textAlign: "justify" }}>
                  {mainProd.parentProductContent.length > 300
                    ? mainProd.parentProductContent.slice(0, 300) + "..."
                    : mainProd.parentProductContent}
                </p>
                <NavLink
                  to={mainProd.parentProductHref}
                  className="btn btn-dark text-white"
                >
                  Read More
                </NavLink>
              </Col>
              <Col lg={9}>
                <Row>
                  {mainProd.childProducts.map((childProd, childProdIndex) => (
                    <Col lg={4} className="mb-4" key={childProdIndex}>
                      <NavLink
                        to={childProd.href}
                        className="text-decoration-none text-black"
                      >
                        <Card>
                          <Card.Img variant="top" src={childProd.img} />
                          <Card.Body>
                            <Card.Text>{childProd.title}</Card.Text>
                          </Card.Body>
                        </Card>
                      </NavLink>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <hr className="mb-5" />
          </>
        ))}
      </Container>
    </>
  );
};

export default index;
