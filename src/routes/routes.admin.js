import { LoginAdmin } from "../pages/Admin";
import { AdminLayout } from "../layouts/AdminLayout/AdminLayout";
import { Route, Routes, Navigate } from "react-router-dom";


function RoutesAdmin() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/admin/login" />} />
            <Route path="/login" element={<AdminLayout />} />

        </Routes>
    )
}
export default RoutesAdmin;