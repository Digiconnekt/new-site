import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import Home from "./pages/Home";
import About from "./pages/About";
import PickToLight from "./pages/PickToLight";
import Products from "./pages/Products";
import ParentProductDetails from "./pages/Products/ParentProductDetails";
import ChildProductDetails from "./pages/Products/ChildProductDetails";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pick-to-light" element={<PickToLight />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:parentProduct"
          element={<ParentProductDetails />}
        />
        <Route
          path="/products/:parentProduct/:childProduct"
          element={<ChildProductDetails />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      <FloatingIcons />
    </>
  );
};

export default App;
