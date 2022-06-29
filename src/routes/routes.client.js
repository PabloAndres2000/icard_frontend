import { Home } from "../pages/Client"
import { Route, Routes } from "react-router-dom";


function RoutesClient() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

    )
}

export default RoutesClient;