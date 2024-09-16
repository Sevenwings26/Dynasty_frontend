// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import AxiosInstance from '../api/AxiosInstance';  // Adjust the import path accordingly

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await AxiosInstance.get('/api/user-profile/');
                setUser(response.data);  // Set the user data
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
