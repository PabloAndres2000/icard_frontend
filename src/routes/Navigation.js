import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesAdmin from "./routes.admin";
import RoutesClient from "./routes.client";

export function Navigation() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RoutesClient />} />
                <Route path="/admin/*" element={<RoutesAdmin />} />
            </Routes>
        </BrowserRouter >

    );
}