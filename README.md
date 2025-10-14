
# 🌐 Personal Portfolio Website

This is the **Backend API** for the **Personal Portfolio Website**.  
It provides secure authentication, blog management, project management, and serves APIs consumed by the Next.js frontend.

---

## 🚀 Live Demo

🔗 **Frontend (Vercel):** [https://abid-codes.vercel.app](https://abid-codes.vercel.app)  
🔗 **Backend (Vercel):** [https://abid-shadat-noor-portfolio-backend.vercel.app](https://abid-shadat-noor-portfolio-backend.vercel.app)

---

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based login/logout for Admin (Portfolio Owner)
- Passwords securely hashed with **bcrypt**
- Auth middleware for route protection
- Role-based access: only Admin can access dashboard APIs

### 📝 Blog Management (Admin)
- CRUD (Create, Read, Update, Delete) for blogs
- Public APIs to list all blogs & fetch individual blog details

### 💻 Project Management (Admin)
- CRUD operations for projects
- Public APIs for project showcase

### 👤 About Me, Experience & Skills
- **About Me**: CRUD for personal info, title, bio, profile image, resume, etc.
- **Experience**: CRUD for work experience (role, company, start/end dates, description)
- **Skill Categories**: Manage categories like Frontend, Backend, Tools, Database, etc.
- **Skills**: CRUD for skills linked to dynamic categories

### ⚡ Error Handling
- Centralized error handler with meaningful messages

### 🍪 Secure Cookies
- `accessToken` stored in HTTP-only cookies

### 🗄️ Prisma ORM
- Schema modeling, relations, and query handling
- Works with PostgreSQL or other SQL databases

### 📡 RESTful APIs
- Ready to connect with any frontend
- Public & private routes organized properly

---

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/) (or compatible DB)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken (JWT)](https://www.npmjs.com/package/jsonwebtoken)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure
```bash
📂 backend/
├─ src/
│  ├─ config/                  # Configuration files
│  │  ├─ db.ts                 # Prisma client & DB connection
│  │  └─ env.ts                # Environment variables loader
│  │
│  ├─ error/                   # Custom error handling
│  │  ├─ AppError.ts           # Custom AppError class
│  │  └─ globalErrorHandler.ts # Express error handler
│  │
│  ├─ generated/               # Prisma auto-generated client
│  │  └─ client/               # Auto-generated files
│  │
│  ├─ middlewares/             # Express middlewares
│  │  ├─ authMiddleware.ts     # JWT auth & role validation
│  │  └─ errorMiddleware.ts    # Global error handling middleware
│  │
│  ├─ modules/                 # Feature-based modules
│  │  ├─ auth/
│  │  │  ├─ auth.controller.ts
│  │  │  ├─ auth.service.ts
│  │  │  └─ auth.routes.ts
│  │  │
│  │  ├─ blog/
│  │  │  ├─ blog.controller.ts
│  │  │  ├─ blog.service.ts
│  │  │  └─ blog.routes.ts
│  │  │
│  │  ├─ project/
│  │  │  ├─ project.controller.ts
│  │  │  ├─ project.service.ts
│  │  │  └─ project.routes.ts
│  │  │
│  │  ├─ about/
│  │  │  ├─ about.controller.ts
│  │  │  ├─ about.service.ts
│  │  │  └─ about.routes.ts
│  │  │
│  │  ├─ experience/
│  │  │  ├─ experience.controller.ts
│  │  │  ├─ experience.service.ts
│  │  │  └─ experience.routes.ts
│  │  │
│  │  └─ skills/
│  │     ├─ skill.controller.ts
│  │     ├─ skill.service.ts
│  │     └─ skill.routes.ts
│  │
│  ├─ types/                   # Custom TypeScript types
│  │  └─ express.d.ts          # e.g., extended Request type with user
│  │
│  ├─ utils/                   # Utility functions
│  │  ├─ catchAsync.ts         # Async wrapper for controllers
│  │  ├─ sendResponse.ts       # Standardized API response
│  │  └─ seedAdmin.ts
│  │
│  ├─ app.ts                   # Express app configuration
│  └─ server.ts                # Entry point to start server
│
├─ prisma/
│  └─ schema.prisma            # Prisma schema for models
│
├─ .env                        # Environment variables
├─ package.json
├─ tsconfig.json               # TypeScript configuration
└─ README.md
```

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/.....
cd name
```

Install dependencies:

```bash
# using npm
npm install

# using yarn
yarn install

# using pnpm
pnpm install
```

Setup environment variables:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/portfolio_db"
JWT_ACCESS_SECRET="your_jwt_secret"
PORT=5000

ADMIN_EMAIL=admin...example.com
ADMIN_PASSWORD=password

BCRYPT_SALT_ROUND=salt_round
```
---
## Dependencies and Prisma Setup

Install Dependencies:
```bash
npm install
```
Run Prisma migrations:
```bash
npx prisma migrate dev
```
Generate Prisma client:
```bash
npx prisma generate
```

Run the development server:

```bash
# using npm
npm run dev

# using yarn
yarn dev

# using pnpm
pnpm dev
```

---

## Scripts

```bash
# Run in development mode
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start
```

---

✅ **Key Points:**
- This is only the Backend API README.md.
- Supports Prisma + PostgreSQL and is ready for development and deployment.
- Professional, clear, and complete for submission 🚀