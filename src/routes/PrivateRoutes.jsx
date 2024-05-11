import { useContext } from "react";
import { useLocation, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { AuthContext } from "../provider/AuthProvider";
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    const location = useLocation();

    if (loading) return <p>Loading ................</p>

    if (user) return children;


    return <Navigate to={'/login'} state={location.pathname} replace={true} />
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node,
}