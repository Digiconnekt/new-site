import { useEffect, useState } from "react";
import { categoryDetails } from "../data";
import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CategoryDetails = ({ category }) => {
  const [catDetails, setCatDetails] = useState(null);
  console.log(
    "🚀 ~ file: index.jsx:6 ~ CategoryDetails ~ catDetails:",
    catDetails
  );

  useEffect(() => {
    const filterData = categoryDetails.find((cat) => cat.title === category);
    setCatDetails(filterData);
  }, [category]);

  return (
    <>
      <Container>
        <h2 className="text-center mb-3 fw-bold">{catDetails?.heading}</h2>
        <p className="text-center">{catDetails?.subHeading}</p>

        {/* section 1 start */}
        <Row className="my-5">
          <Col lg={6}>
            <h3 className="fw-bold">{catDetails?.sectionOne?.title}</h3>
            <p>{catDetails?.sectionOne?.text}</p>
            <ul>
              {catDetails?.sectionOne?.list?.map((elem, i) => (
                <li key={i}>{elem}</li>
              ))}
            </ul>
          </Col>
          <Col lg={6}>
            <Image
              fluid
              src={catDetails?.sectionOne?.img}
              alt={catDetails?.sectionOne?.title}
            />
          </Col>
        </Row>
        {/* section 1 end */}

        {/* section 2 start */}
        <Row className="my-5 justify-content-center text-center">
          <Col lg={8}>
            <h3 className="fw-bold">{catDetails?.sectionTwo?.title}</h3>
            <p>{catDetails?.sectionTwo?.text}</p>
          </Col>
        </Row>
        {/* section 2 end */}

        {/* section 3 start */}
        <Row className="my-5">
          <Col lg={6}>
            <Image
              fluid
              src={catDetails?.sectionThree?.img}
              alt={catDetails?.sectionThree?.title}
            />
          </Col>
          <Col lg={6}>
            <h3 className="fw-bold">{catDetails?.sectionThree?.title}</h3>
            <p>{catDetails?.sectionThree?.text}</p>
            <NavLink to="/contact" className="btn btn-primary">
              Consult
            </NavLink>
          </Col>
        </Row>
        {/* section 3 end */}

        {/* section 4 start */}
        <h3 className="fw-bold text-center mt-5">
          {catDetails?.sectionFour?.title}
        </h3>
        <Row className="text-center mt-4 mb-5">
          {catDetails?.sectionFour?.list?.map((elem, i) => (
            <Col md={3} key={i}>
              <i className={elem?.icon} style={{ fontSize: "45px" }}></i>
              <h5 className="mt-2">{elem?.title}</h5>
            </Col>
          ))}
        </Row>
        {/* section 4 end */}

        {/* section 5 start */}
        <Row className="my-5">
          <Col lg={6}>
            <h3 className="fw-bold">{catDetails?.sectionFive?.title}</h3>
            <p>{catDetails?.sectionFive?.text}</p>
            <ul>
              {catDetails?.sectionFive?.list?.map((elem, i) => (
                <li key={i}>{elem}</li>
              ))}
            </ul>
          </Col>
          <Col lg={6}>
            <Image
              fluid
              src={catDetails?.sectionFive?.img}
              alt={catDetails?.sectionFive?.title}
            />
          </Col>
        </Row>
        {/* section 5 end */}
      </Container>
    </>
  );
};

export default CategoryDetails;
