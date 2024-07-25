import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import Onboarding from './components/Onboarding';

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default Root;
