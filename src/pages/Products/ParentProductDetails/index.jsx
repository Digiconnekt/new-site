import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { products } from "../data";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ParentProductDetails = () => {
  const { parentProduct } = useParams();
  const [parentProductData, setParentProductData] = useState(null);

  useEffect(() => {
    const data = products.find(
      (prod) => prod.parentProductTitle === parentProduct
    );
    setParentProductData(data);
  }, [parentProduct]);

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
            <h2 className="fw-bold mb-1">
              {parentProductData?.parentProductTitle}
            </h2>
            <p>{parentProductData?.parentProductContent}</p>

            <h6 className="fw-bold mt-4">Product Composition:</h6>
            <Image
              fluid
              src={parentProductData?.compositionImg}
              alt={parentProductData?.parentProductTitle}
            />

            <h6 className="fw-bold mt-4">Solution:</h6>
            <Image
              fluid
              src={parentProductData?.solutionImg}
              alt={parentProductData?.parentProductTitle}
            />

            <Row className="my-5">
              <Col lg={6}>
                <Image
                  fluid
                  src={parentProductData?.benefits?.img}
                  alt={parentProductData?.parentProductTitle}
                />
              </Col>
              <Col lg={6}>
                <h6 className="fw-bold mt-4">Benefits:</h6>
                <ul>
                  {parentProductData?.benefits?.benefitsList?.map((elem, i) => (
                    <li key={i}>{elem}</li>
                  ))}
                </ul>
              </Col>
            </Row>

            <h6 className="bg-dark text-white py-2 px-3 mt-4">
              {parentProductData?.childProducts?.length} products found for{" "}
              {parentProductData?.parentProductTitle}
            </h6>
            <Row className="mt-4">
              {parentProductData?.childProducts?.map(
                (childProd, childProdIndex) => (
                  <Col lg={4} className="mb-4" key={childProdIndex}>
                    <NavLink
                      to={childProd.title}
                      className="text-decoration-none text-black"
                    >
                      <Card>
                        <Card.Img variant="top" src={childProd?.img} />
                        <Card.Body>
                          <Card.Text>{childProd?.title}</Card.Text>
                        </Card.Body>
                      </Card>
                    </NavLink>
                  </Col>
                )
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ParentProductDetails;
