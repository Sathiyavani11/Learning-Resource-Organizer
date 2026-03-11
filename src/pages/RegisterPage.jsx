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

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill all fields.');
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
    if (!emailIsValid) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const users = readUsers();
      const existingUser = users.find((user) => user.email.toLowerCase() === normalizedEmail);

      if (existingUser) {
        setError('An account with this email already exists.');
        return;
      }

      users.push({
        id: Date.now().toString(),
        name: name.trim(),
        email: normalizedEmail,
        password
      });

      localStorage.setItem('lro_users', JSON.stringify(users));
      localStorage.setItem('lro_current_user', JSON.stringify({ name: name.trim(), email: normalizedEmail }));
      sessionStorage.setItem('lro_current_user', JSON.stringify({ name: name.trim(), email: normalizedEmail }));
      setSuccess('Registration successful. Redirecting to dashboard...');
      navigate('/dashboard', { replace: true });
    } catch {
      setError('Register failed due to browser storage issue. Please try again.');
    }
  };

  return (
    <div className="page">
      <Navbar />
      <main className="auth-wrap auth-layout">
        <section className="auth-side">
          <p className="eyebrow-dark">Student Friendly</p>
          <h2>Build Your Personal Learning Library</h2>
          <p>Create an account and save all coding resources topic-wise in one organized dashboard.</p>
          <div className="mini-points">
            <p>Track HTML, CSS, JavaScript, React resources.</p>
            <p>Search instantly when revising for interviews.</p>
            <p>Keep links safe with local browser storage.</p>
          </div>
        </section>

        <form className="auth-card" onSubmit={handleRegister}>
          <h2>Register</h2>
          <p>Create your account and start organizing resources.</p>

          <label htmlFor="name">Full Name</label>
          <input id="name" required value={name} onChange={(event) => setName(event.target.value)} />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
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

          <button type="submit" className="btn btn-primary">Register</button>
          {error && <p className="error-text">{error}</p>}
          {success && <p className="ok-text">{success}</p>}

          <p className="auth-alt">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </main>
    </div>
  );
}

export default RegisterPage;
