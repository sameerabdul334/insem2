# Student Portal (JWT Authentication)

A beginner-friendly full-stack student portal built with React + Vite and Node.js + Express.
Students can sign in, view a protected personal profile, browse course materials, and sign out.

## Requirements
- Node.js 18+
- npm

## 1. Start the backend
```bash
cd server
npm install
copy .env.example .env
npm run dev
```
Backend runs at http://localhost:5000

Demo login:
- Email: student@example.com
- Password: student123

## 2. Start the frontend
Open a second terminal:
```bash
cd client
npm install
npm run dev
```
Open the URL shown by Vite (normally http://localhost:5173).

## Folder structure
```text
student-portal-jwt/
├── client/
│   ├── src/
│   │   ├── components/       # Navbar, ProtectedRoute
│   │   ├── context/          # Auth context
│   │   ├── pages/            # Login, Dashboard, Profile, Courses
│   │   ├── services/         # API helper
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   └── package.json
└── server/
    ├── middleware/           # JWT verification
    ├── routes/               # Auth, student, course endpoints
    ├── .env.example
    ├── package.json
    └── server.js
```

## How JWT works here
1. The student submits email and password on the login page.
2. Express checks the demo credentials and creates a signed JWT.
3. React keeps the token in sessionStorage for this learning demo.
4. Protected API requests send `Authorization: Bearer <token>`.
5. The backend verifies the JWT before returning profile or course data.

## Important
This is a local educational demo with one sample account and sample course materials.
For a real college portal, use a database, HTTPS, secure HttpOnly cookies, password hashing,
role-based permissions, input validation, rate limiting, and an administrator-managed upload
system. Do not use the demo credentials or in-memory data for real student information.
