import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { student, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return <header className="navbar">
    <div className="brand">Campus<span>Connect</span></div>
    <nav>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
      <NavLink to="/courses">Courses</NavLink>
    </nav>
    <div className="nav-user">
      <span>{student?.name}</span>
      <button className="logout-btn" onClick={handleLogout}>Sign out</button>
    </div>
  </header>;
}
