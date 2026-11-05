import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { apiRequest } from "../services/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => { apiRequest("/courses").then(setCourses).catch(err => setError(err.message)); }, []);

  return <><Navbar /><main className="page-wrap">
    <p className="eyebrow">LEARNING LIBRARY</p><h1 className="page-title">Courses & Materials</h1>
    <p className="muted">Open your course resources and continue learning.</p>
    {error && <p className="error">{error}</p>}
    <section className="course-list">
      {courses.map(course => <article className="material-card" key={course.id}>
        <div className="material-top"><div><span className="course-code">{course.id}</span><h2>{course.title}</h2><p>{course.description}</p></div><span className="book-icon">📘</span></div>
        <p className="instructor">Instructor: {course.instructor}</p>
        <h3 className="materials-title">Course materials</h3>
        {course.materials.map(item => <a className="material-row" href={item.url} target="_blank" rel="noreferrer" key={item.title}>
          <span>📄 {item.title}</span><span>{item.type} ↗</span>
        </a>)}
      </article>)}
    </section>
  </main></>;
}
