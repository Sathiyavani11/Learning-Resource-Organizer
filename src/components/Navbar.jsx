import { Link, useNavigate } from 'react-router-dom';

function Navbar({ showAuthActions = true, currentUser = null }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('lro_current_user');
    navigate('/login');
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        Learning Resource Organizer
      </Link>
      {showAuthActions && (
        <nav className="nav-links">
          <Link className="text-link" to="/resources">Resources</Link>
          <Link className="text-link" to="/insights">Insights</Link>
          <Link className="text-link" to="/learning-path">Learning Path</Link>
          <Link className="text-link" to="/help">Help</Link>
          {currentUser ? (
            <>
              <Link className="text-link" to="/dashboard">Dashboard</Link>
              <span className="welcome-text">Hi, {currentUser.name}</span>
              <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline" to="/login">Login</Link>
              <Link className="btn btn-primary" to="/register">Register</Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
