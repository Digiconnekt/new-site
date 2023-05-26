import { Col, Container, Image, Row, Table } from "react-bootstrap";
import { products } from "../data";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ChildProductDetails = () => {
  const { parentProduct, childProduct } = useParams();

  const [parentProductData, setParentProductData] = useState(null);
  const [childProductData, setChildProductData] = useState(null);

  console.log(
    "🚀 ~ file: index.jsx:10 ~ ChildProductDetails ~ parentProductData:",
    parentProductData
  );

  useEffect(() => {
    const parentData = products.find(
      (prod) => prod.parentProductTitle === parentProduct
    );
    setParentProductData(parentData);

    if (parentData) {
      const childData = parentData.childProducts.find(
        (child) => child.title === childProduct
      );
      setChildProductData(childData);
    }
  }, [parentProduct, childProduct]);

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
            <h4 className="fw-bold mb-4">{childProductData?.title}</h4>

            <Row className="mb-4">
              <Col lg={5}>
                <Image fluid src={childProductData?.img} />
              </Col>
              <Col lg={7}>
                {childProductData?.details?.map((elem, i) => (
                  <Row key={i}>
                    <Col lg={3}>
                      <h6>{elem.key}</h6>
                    </Col>
                    <Col lg={1}>:</Col>
                    <Col lg={8}>
                      <p className="mb-1">{elem.value}</p>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <h5 className="fw-bold mb-3">Features:</h5>

                <ul>
                  {childProductData?.features?.map((elem, i) => (
                    <li key={i}>{elem}</li>
                  ))}
                </ul>
              </Col>
              <Col lg={6}>
                <Image fluid src={childProductData?.img} />
              </Col>
            </Row>

            <h5 className="fw-bold mb-3">Parameter:</h5>
            <Table responsive bordered>
              <tbody>
                {childProductData?.parameters?.map((elem, i) => (
                  <tr className="text-center" key={i}>
                    <td width={"50%"}>{elem.key}</td>
                    <td width={"50%"}>{elem.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChildProductDetails;
