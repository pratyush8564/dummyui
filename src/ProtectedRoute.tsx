import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const token = localStorage.getItem('authToken');

  // If there is a token, render the protected element, otherwise redirect to login
  return token ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
