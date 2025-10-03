
# 🌐 Personal Portfolio Website

This is the **Backend API** for the **Personal Portfolio Website**.  
It provides secure authentication, blog management, project management, and serves APIs consumed by the Next.js frontend.

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
backend/
├─ src/
│ ├─ config/ # Database config, env config
│ ├─ error/ # AppError class & global error handler
│ ├─ generated/ # Prisma client (auto-generated)
│ ├─ middlewares/ # Auth middleware, error handling
│ ├─ modules/ # Feature-wise modules
│ │ ├─ auth/ # login, logout, auth services
│ │ ├─ blog/ # blog controller, service, routes
│ │ └─ project/ # project controller, service, routes
│ ├─ types/ # Custom type definitions (e.g., req.user)
│ ├─ utils/ # catchAsync, sendResponse helpers
│ ├─ app.ts # Express app configuration
│ └─ server.ts # Server entry point
├─ prisma/
│ └─ schema.prisma # Prisma schema
└─ package.json
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