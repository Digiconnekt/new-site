import { Button, Col, Container, Image, Row } from "react-bootstrap";

const ContentImg = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={7}>
            <h2 className="display-5 fw-bold mb-4">
              Retail Electronic Shelf labels Solution
            </h2>
            <ul className="mb-4">
              <li className="mb-2">
                Digital shelf label size: 1.54&#34; , 2.13&#34; ,2.66&#34; ,
                2.9&#34; , 4.2&#34; , 5.8&#34; ,7.5&#34; , 11.6&#34;
              </li>
              <li className="mb-2">
                Technology: 2.4G/433 MHz wireless network technology, E-ink
                display. Refresh 20 thousands tags /one hour/ap .3-5 years life
                time, battery can be replaced quickly.ESL management system
              </li>
              <li className="mb-2">
                Working Principle: Real-time display the latest contents ,match
                CRM, POS, ERP management systems and docking with all kind of
                metholds ,such as SQL ,FTP, FILE etc.
              </li>
            </ul>
            <Button
              href="/services"
              variant="dark"
              className="py-3 px-4 text-white"
            >
              Read More
            </Button>
          </Col>
          <Col lg={5}>
            <Image
              src="https://icdn.tradew.com/file/201807/1573002/jpg/7667681.jpg?x-oss-process=image/format,webp"
              alt="img"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContentImg;
