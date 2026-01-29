import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";
import { useEffect } from "react";

const ProtectRoute = ({ children }) => {

  const navigate = useNavigate();
  const { setShowLogin } = useAppContext();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  useEffect(() => {
    if (!user) {
      navigate("/");
      setShowLogin(true);
    }
  }, [user, navigate, setShowLogin]);

  if (!user) return null;

  return children;
};

export default ProtectRoute;