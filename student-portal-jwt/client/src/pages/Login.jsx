import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { student, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("student@example.com");
  const [password, setPassword] = useState("student123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (student) return <Navigate to="/" replace />;

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return <main className="login-page">
    <section className="login-card">
      <div className="login-mark">CC</div>
      <p className="eyebrow">STUDENT LEARNING SPACE</p>
      <h1>Welcome back</h1>
      <p className="muted">Sign in to access your student portal.</p>
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <p className="error">{error}</p>}
        <button className="primary-btn" disabled={loading}>{loading ? "Signing in..." : "Sign in to portal"}</button>
      </form>
      <div className="demo-note"><strong>Demo account</strong><br />student@example.com<br />student123</div>
    </section>
  </main>;
}
