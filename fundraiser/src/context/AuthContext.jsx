import React, { createContext, useState, useEffect } from 'react';
import config from '../config';
import axios from 'axios'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    // Function to check session status
    const checkSession = async () => {
        try {
            const response = await axios.get(`${config.baseURL}/checksession`, { withCredentials: true });
            if (response.data.authenticated) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        } catch (error) {
            console.error('Session check failed:', error);
            setAuthenticated(false);
        }
    };

    // Check session status when component mounts
    useEffect(() => {
        checkSession();
    }, []);

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
