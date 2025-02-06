import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if(loading){
        return <div className='flex justify-center items-center text-red-500 min-h-screen'><span className="loading loading-bars loading-lg"></span></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location || "/" }} replace />;
    }
    return children;
};

export default PrivateRoute;