import { Routes, Route } from "react-router-dom";

import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Products from "../pages/user/Products";
import Login from "../pages/user/Login";
import AdminLayout from "../layouts/AdminLayout";
import AdminRoutes from "./AdminRoutes";
import Contact from "../pages/user/Contact";
function AppRoutes() {
  return (
    <Routes>
      {/* User Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login/>} />
      

      {/* Admin Pages */}
      <Route
        path="/admin/*"
        element={
          <AdminLayout>
            <AdminRoutes />
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default AppRoutes;