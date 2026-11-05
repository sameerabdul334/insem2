import { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();
const student = {
  id: "STU1001",
  name: "Alex Student",
  email: "student@example.com",
  department: "Computer Science",
  year: "2nd Year",
  phone: "+91 90000 12345",
  college: "ABC Institute of Technology"
};

router.get("/profile", verifyToken, (req, res) => {
  if (req.student.id !== student.id) return res.status(404).json({ message: "Student not found." });
  res.json(student);
});

export default router;
