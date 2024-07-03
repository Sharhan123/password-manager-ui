import { useSelector } from 'react-redux';
import { verifyUserToken } from '../middleWares/userTokenVerify';
import { Navigate } from 'react-router-dom';

const ProtectedRouteWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
  
  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return <>{children}</>;
  }
};

const AuthRouterWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  
  if (token) {
    verifyUserToken(token);
    return <>{children}</>;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default { AuthRouterWrapper, ProtectedRouteWrapper };
