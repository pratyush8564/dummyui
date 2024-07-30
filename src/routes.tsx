import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import Onboarding from './components/Onboarding';
import ProtectedRoute from './ProtectedRoute';

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="forgot-password" element={<ForgotPassword />}/>
        <Route path="/onboarding" element={<ProtectedRoute element={<Onboarding />} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />      </Routes>
    </Router>
  );
}

export default Root;
