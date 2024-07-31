import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePreventBackNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      const token = localStorage.getItem('authToken');
      const companyId = localStorage.getItem('companyId');
      console.log(companyId, "copmany idss:")

      // Redirect if the user tries to navigate back and company_id is present
      if (token && companyId) {
        navigate('/dashboard'); // or any route you wish to redirect to
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);
};

export default usePreventBackNavigation;
