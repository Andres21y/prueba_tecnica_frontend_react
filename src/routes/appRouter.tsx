import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Loging } from "../pages/Login";
import { Dasboard } from "../pages/Dashboard";
import { CreateAction } from "../pages/CreateActions";
import type { ReactNode } from "react";


const PrivateRoute = ({ children }: { children: ReactNode }) => {

    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to="/login" />;
}

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Loging />} />

                <Route path="/dashboard" element={
                    <Dasboard />
                } />
                 
                <Route path="/create-action" element={
                    <PrivateRoute>
                        <CreateAction />
                    </PrivateRoute>
                } />

                <Route path="*" element={<Navigate to="/dashboard" />} />

            </Routes>
        </BrowserRouter>
    )
}