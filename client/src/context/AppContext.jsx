import { createContext, useContext, useState } from "react";
import axiosInstance from "../utils/axiosInstance.js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();

    // Initialize user from local storage
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [showLogin, setShowLogin] = useState(false);
    const [state, setState] = useState("login");

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
        toast.success("Logged out successfully");
    }

    const handleGetStarted = () => {
        if (user) logout();
        setState("register");
        setShowLogin(true);
    }

    const value = {
        axiosInstance,
        user,
        setUser,
        showLogin,
        setShowLogin,
        logout,
        state,
        setState,
        handleGetStarted,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);