import axios from "axios";
import { createContext, useContext, useEffect, useState, useRef, use } from "react";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState("login");

    // Check user login status
    const fetchUser = async () => {
        try {
            const { data } = await axios.get("/user/data");
            if (data.success) {
                setUser(data.user);
                localStorage.setItem("user", JSON.stringify(data.user));
            } else {
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
        navigate("/");
        toast.success("Logged out successfully");
    }

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
            setToken(storedToken);
            fetchUser();
        }
    }, []);

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            fetchUser();
        }
    }, [token]);

    const value = {
        axios,
        user,
        setUser,
        token,
        setToken,
        showLogin,
        setShowLogin,
        logout,
        loading,
        setLoading,
        state,
        setState
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

}

export const useAppContext = () => useContext(AppContext);
