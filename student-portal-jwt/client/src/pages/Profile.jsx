import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { apiRequest } from "../services/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    apiRequest("/student/profile").then(setProfile).catch(err => setError(err.message));
  }, []);

  return <><Navbar /><main className="page-wrap">
    <p className="eyebrow">ACCOUNT</p><h1 className="page-title">My Profile</h1>
    <p className="muted">Your personal and academic information.</p>
    {error && <p className="error">{error}</p>}
    {profile && <section className="profile-card">
      <div className="avatar">{profile.name.split(" ").map(n => n[0]).join("")}</div>
      <h2>{profile.name}</h2><p className="muted">{profile.email}</p>
      <div className="profile-details">
        <div><small>Student ID</small><strong>{profile.id}</strong></div>
        <div><small>Department</small><strong>{profile.department}</strong></div>
        <div><small>Academic year</small><strong>{profile.year}</strong></div>
        <div><small>Phone</small><strong>{profile.phone}</strong></div>
        <div className="wide"><small>College</small><strong>{profile.college}</strong></div>
      </div>
    </section>}
  </main></>;
}
