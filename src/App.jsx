import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ResourcesPage from './pages/ResourcesPage';
import InsightsPage from './pages/InsightsPage';
import LearningPathPage from './pages/LearningPathPage';
import HelpPage from './pages/HelpPage';
import BeginnerHtmlPage from './pages/BeginnerHtmlPage';
import BeginnerCssPage from './pages/BeginnerCssPage';
import BeginnerJavaScriptPage from './pages/BeginnerJavaScriptPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/learning-path" element={<LearningPathPage />} />
      <Route path="/beginner/html" element={<BeginnerHtmlPage />} />
      <Route path="/beginner/css" element={<BeginnerCssPage />} />
      <Route path="/beginner/javascript" element={<BeginnerJavaScriptPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
