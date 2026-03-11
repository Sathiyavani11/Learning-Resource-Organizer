import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const readUsers = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem('lro_users') || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const users = readUsers();
    const validUser = users.find(
      (user) => user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password
    );

    if (!validUser) {
      setError('Invalid email or password.');
      return;
    }

    localStorage.setItem('lro_current_user', JSON.stringify({ name: validUser.name, email: validUser.email }));
    sessionStorage.setItem('lro_current_user', JSON.stringify({ name: validUser.name, email: validUser.email }));
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="page">
      <Navbar />
      <main className="auth-wrap auth-layout">
        <section className="auth-side">
          <p className="eyebrow-dark">Welcome Back</p>
          <h2>Continue Where You Stopped</h2>
          <p>Login to access your saved learning resources, filters, and dashboard insights.</p>
          <div className="mini-points">
            <p>Quick search by title.</p>
            <p>Category-wise link management.</p>
            <p>Simple and responsive dashboard.</p>
          </div>
        </section>

        <form className="auth-card" onSubmit={handleLogin}>
          <h2>Login</h2>
          <p>Welcome back. Continue your learning journey.</p>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" className="btn btn-primary">Login</button>
          {error && <p className="error-text">{error}</p>}

          <p className="auth-alt">
            Need an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
