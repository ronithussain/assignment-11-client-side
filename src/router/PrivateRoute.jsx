import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if(loading){
        return <LoadingSpinner/>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location || "/" }} replace />;
    }
    return children;
};

export default PrivateRoute;