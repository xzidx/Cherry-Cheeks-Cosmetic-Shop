import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="dashboard" replace />}
      />

      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AdminRoutes;