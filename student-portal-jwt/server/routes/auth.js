import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

// Demo-only account. Replace with a database and securely hashed passwords in production.
const demoStudent = {
  id: "STU1001",
  name: "Alex Student",
  email: "student@example.com",
  password: "student123",
  department: "Computer Science",
  year: "2nd Year"
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email !== demoStudent.email || password !== demoStudent.password) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const token = jwt.sign(
    { id: demoStudent.id, email: demoStudent.email },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );
  res.json({
    token,
    student: {
      id: demoStudent.id,
      name: demoStudent.name,
      email: demoStudent.email
    }
  });
});

export default router;
