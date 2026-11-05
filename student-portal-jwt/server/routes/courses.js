import { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();
const courses = [
  {
    id: "CSE201",
    title: "Web Development",
    instructor: "Dr. Meera",
    description: "HTML, CSS, JavaScript, React and REST APIs.",
    materials: [
      { title: "HTML & CSS Notes", type: "PDF", url: "https://developer.mozilla.org/en-US/docs/Learn" },
      { title: "JavaScript Guide", type: "Web resource", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
    ]
  },
  {
    id: "CSE202",
    title: "Database Management Systems",
    instructor: "Prof. Arun",
    description: "Relational databases, SQL and database design.",
    materials: [
      { title: "SQL Tutorial", type: "Web resource", url: "https://www.w3schools.com/sql/" },
      { title: "PostgreSQL Documentation", type: "Web resource", url: "https://www.postgresql.org/docs/" }
    ]
  },
  {
    id: "CSE203",
    title: "Computer Networks",
    instructor: "Dr. Nisha",
    description: "Networking fundamentals, protocols and the Internet.",
    materials: [
      { title: "Networking Basics", type: "Web resource", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" }
    ]
  }
];

router.get("/", verifyToken, (_req, res) => res.json(courses));
export default router;
