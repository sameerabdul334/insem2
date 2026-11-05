import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { student } = useAuth();
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/courses").then(setCourses).catch(err => setError(err.message));
  }, []);

  return <>
    <Navbar />
    <main className="page-wrap">
      <section className="welcome-panel">
        <div><p className="eyebrow">STUDENT DASHBOARD</p>
          <h1>Hello, {student?.name?.split(" ")[0] || "Student"} 👋</h1>
          <p>Welcome to your learning space. Your courses and study materials are all in one place.</p>
        </div>
        <div className="welcome-icon">🎓</div>
      </section>
      <div className="section-heading"><div><p className="eyebrow">YOUR LEARNING</p><h2>Quick overview</h2></div></div>
      <section className="stats-grid">
        <article className="stat-card"><span className="stat-icon">📚</span><div><strong>{courses.length}</strong><p>Enrolled courses</p></div></article>
        <article className="stat-card"><span className="stat-icon">👤</span><div><strong>{student?.id || "—"}</strong><p>Student ID</p></div></article>
        <article className="stat-card"><span className="stat-icon">📖</span><div><strong>Available</strong><p>Study materials</p></div></article>
      </section>
      <div className="section-heading"><div><p className="eyebrow">CONTINUE LEARNING</p><h2>Your courses</h2></div><Link className="text-link" to="/courses">View all courses →</Link></div>
      {error && <p className="error">{error}</p>}
      <section className="course-grid">
        {courses.slice(0, 3).map(course => <article className="course-card" key={course.id}>
          <div className="course-symbol">▣</div><p className="course-code">{course.id}</p><h3>{course.title}</h3>
          <p>{course.description}</p><span className="instructor">Instructor: {course.instructor}</span>
          <Link to="/courses" className="course-link">Open materials →</Link>
        </article>)}
      </section>
    </main>
  </>;
}
