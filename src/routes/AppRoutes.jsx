import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Products from "../pages/user/Products";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Products />} />
    </Routes>
  );
}

export default AppRoutes;