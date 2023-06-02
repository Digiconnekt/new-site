import PageHeadingBanner from "../../components/PageHeadingBanner";
import MoreSolutions from "../../components/MoreSolutions";
import { categoryDetails } from "./data";
import CategoryDetails from "./CategoryDetails";
import { Container } from "react-bootstrap";
import { useState } from "react";

const Solutions = () => {
  const [category, setCategory] = useState(
    "Retail Electronic Shelf labels Solution"
  );

  const categoryHandler = (category) => {
    setCategory(category);
  };

  return (
    <>
      <PageHeadingBanner title="Solutions" />

      <Container className="my-5">
        <nav
          className="nav nav-pills flex-column flex-sm-row bg-light"
          style={{ border: "1px solid #0d6efd", borderRadius: "10px" }}
        >
          {categoryDetails.map((elem, i) => (
            <div
              key={i}
              className={`${
                category === elem.title
                  ? "flex-sm-fill text-sm-center nav-link active"
                  : "flex-sm-fill text-sm-center nav-link"
              } `}
              style={{ cursor: "pointer" }}
              onClick={() => categoryHandler(elem.title)}
            >
              {elem.title}
            </div>
          ))}
        </nav>
      </Container>

      <CategoryDetails category={category} />

      <MoreSolutions />
    </>
  );
};

export default Solutions;
