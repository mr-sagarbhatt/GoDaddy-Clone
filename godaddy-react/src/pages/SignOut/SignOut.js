import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/local-storage";
import { useAuthContext } from "../../contexts/AuthContext";

const SignOut = () => {
  const navigate = new useNavigate();
  const { setUserToken } = useAuthContext();

  useEffect(() => {
    removeToken();
    setUserToken("");
    navigate("/", { replace: true });
  }, [navigate]);

  return <></>;
};

export default SignOut;
