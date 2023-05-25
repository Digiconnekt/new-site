import { Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

const index = ({ title }) => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage:
            "url('https://icdn.tradew.com/file/201807/1573002/jpg/7633505.jpg?x-oss-process=image/format,webp')",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Container>
          <h1 className="text-center text-white fw-bold">{title}</h1>
          {/* <ul className="d-flex justify-content-center align-items-center gap-1 list-inline mt-3">
            <li>
              <NavLink to="/" className="text-decoration-none text-white">
                Home
              </NavLink>
            </li>
            <li className="text-white">/</li>
            <li className="text-white">Contact</li>
          </ul> */}
        </Container>
      </Container>
    </>
  );
};

export default index;
