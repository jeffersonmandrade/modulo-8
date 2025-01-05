import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import Registro from "./pages/Registro.tsx";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";


function Routers(): JSX.Element {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Login} />
                    {/* Páginas protegidas */}
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/registro"
                        element={
                            <ProtectedRoute>
                                <Registro/>
                            </ProtectedRoute>
                        }
                    />
                </Routes>
        </BrowserRouter>
    );
}

export default Routers;
