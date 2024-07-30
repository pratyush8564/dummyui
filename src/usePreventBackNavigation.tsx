import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePreventBackNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        navigate('/onboarding'); // Redirect to the dashboard or home if user tries to go back
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);
};

export default usePreventBackNavigation;
