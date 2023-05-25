import { Col, Container, Image, Row } from "react-bootstrap";
import CountUp from "react-countup";
import PageHeadingBanner from "../../components/PageHeadingBanner";
import MoreSolutions from "../../components/MoreSolutions";
import FiveBlock from "./FiveBlock";
import AboutSlider from "./AboutSlider";
import SixBlockGrid from "./SixBlockGrid";

const index = () => {
  return (
    <>
      <PageHeadingBanner title="About Us" />

      <Container className="py-5">
        <h2 className="text-center fw-bold">
          One-stop Electronic Shelf Label Solution Innovator
        </h2>
        <h6 className="text-center">
          Experienced Electronic Shelf Labels Provider
        </h6>
        <Row className="mt-4">
          <Col lg={10} className="mx-auto text-center">
            <p>
              Sertag is a global supplier of electronic shelf labels,smart
              tags,location card.providing professional one-stop service for
              system integrators and final users.We have different electronic
              shelf labels solutions such as RF solution,bluetooth solution,NFC
              solution,WIFI solution for high-class products in healthcare,
              warehouse, office, retail and other consumption sectors.
            </p>
          </Col>
        </Row>
        <FiveBlock />
      </Container>

      <Container className="py-5">
        <h2 className="text-center fw-bold">
          One-stop Electronic Shelf Label Solution Innovator
        </h2>
        <h6 className="text-center">
          Experienced Electronic Shelf Labels Provider
        </h6>
        <Row className="mt-4">
          <Col lg={10} className="mx-auto text-center">
            <p>
              Sertag is a global supplier of electronic shelf labels,smart
              tags,location card.providing professional one-stop service for
              system integrators and final users.We have different electronic
              shelf labels solutions
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <AboutSlider />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3">
              Retail Electronic Shelf labels Solution
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae tenetur, sint accusamus quo quia autem rerum deserunt.
              Quo, quidem doloremque? sint accusamus quo quia autem rerum
              deserunt. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Recusandae tenetur, sint accusamus quo quia autem rerum
              deserunt. Quo, quidem doloremque? sint accusamus quo quia autem
              rerum deserunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae tenetur, sint accusamus quo quia autem rerum deserunt.
              Quo, quidem doloremque , quidem doloremque? sint accusamus quo
              quia autem rerum deserunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae tenetur, sint accusamus quo quia autem rerum deserunt.
            </p>
          </Col>
        </Row>
      </Container>

      <SixBlockGrid />

      <Container className="py-5">
        <h2 className="text-center fw-bold">
          Sertag Digital Smart Labels All Over The World
        </h2>
        <Image
          className="mt-4"
          fluid
          src="https://icdn.tradew.com/file/201807/1573002/png/7633721.png?x-oss-process=image/format,webp"
          alt=""
        />
      </Container>

      <Container fluid className="bg-light py-5">
        <Container>
          <h2 className="text-center fw-bold">
            Customize Your Own Digital Price Tags
          </h2>
          <Row className="align-items-center justify-content-center mt-5">
            <Col lg={3}>
              <Image
                fluid
                src="https://icdn.tradew.com/file/201807/1573002/png/7633744.png?x-oss-process=image/format,webp"
                alt=""
              />
              <h6 className="text-center mt-3">Common Ideas</h6>
            </Col>
            <Col
              lg={1}
              className="text-center text-info fw-bold display-2 mb-3"
            >
              +
            </Col>
            <Col lg={3}>
              <Image
                fluid
                src="https://icdn.tradew.com/file/201807/1573002/png/7636859.png?x-oss-process=image/format,webp"
                alt=""
              />
              <h6 className="text-center mt-3">Sertag R&D Technology</h6>
            </Col>
            <Col
              lg={1}
              className="text-center text-info fw-bold display-2 mb-3"
            >
              =
            </Col>
            <Col lg={3}>
              <Image
                fluid
                src="https://icdn.tradew.com/file/201807/1573002/png/7633746.png?x-oss-process=image/format,webp"
                alt=""
              />
              <h6 className="text-center mt-3">Your Exclusive Product</h6>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="py-5">
        <h2 className="text-center fw-bold">
          The Worlds Most Reliable Electronic Shelf Labels Supplier
        </h2>
        <Row className="text-center mt-5">
          <Col lg={4}>
            <h2 className="display-2 fw-bold">
              <CountUp end={40} suffix="+" />
            </h2>
            <h6>Product Categories/Product Categories</h6>
          </Col>
          <Col lg={4}>
            <h2 className="display-2 fw-bold">
              <CountUp end={500} suffix="+" />
            </h2>
            <h6>Product Categories/Product Categories</h6>
          </Col>
          <Col lg={4}>
            <h2 className="display-2 fw-bold">
              <CountUp end={80} suffix="+" />
            </h2>
            <h6>Product Categories/Product Categories</h6>
          </Col>
        </Row>
      </Container>

      <MoreSolutions />
    </>
  );
};

export default index;
