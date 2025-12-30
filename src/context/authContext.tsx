import React, { createContext, useContext, useState } from "react";
import type { AuthContextType } from "../utils/interface";

/**creacion del contexto */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    /**funcion para guardar el token en local storage */
    const login = (newToken: string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken)
    }

    /**funcion que elimina el token y limpia el estado */
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null)
    }

    /**indicamos si el user está autenticado */
    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                isAuthenticated
            }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}