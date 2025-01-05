import React from 'react';
import { Navigate } from 'react-router-dom';
import JwtAuthService from "../services/JWT";


const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Recupera o token do localStorage
    const token = localStorage.getItem('token');

    if (!token) {
        console.warn('Token não encontrado. Redirecionando para o login.');
        return <Navigate to="/" replace />;
    }

    const decodedToken = JwtAuthService.decodeToken(token);

    if (!decodedToken || (decodedToken as any).exp * 1000 < Date.now()) {
        console.warn('Token inválido ou expirado. Redirecionando para o login.');
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
