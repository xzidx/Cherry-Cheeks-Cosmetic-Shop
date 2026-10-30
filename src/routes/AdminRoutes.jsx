import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import ManageProducts from "../pages/admin/ManageProducts";
import ManageOrders from "../pages/admin/ManageOrders";
import ManageCategories from "../pages/admin/ManageCategories";
import ManageUsers from "../pages/admin/ManageUsers";
import AdminSettings from "../pages/admin/AdminSettings";
import AddProduct from "../pages/admin/AddProduct";
import OrderDetails from "../pages/admin/OrderDetails";
import Users from "../pages/admin/ManageUsers";

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="dashboard" replace />}
      />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage-products" element={<ManageProducts />} />
      <Route path="/manage-categories" element={<ManageCategories />} />
      <Route path="/manage-orders" element={<ManageOrders />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/admin-settings" element={<AdminSettings />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/orders/:orderId" element={<OrderDetails />} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
}

export default AdminRoutes;