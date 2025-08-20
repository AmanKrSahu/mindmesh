# 🚀 B2B Project Management Platform

A **multi-tenant project management system** designed for teams to manage workspaces, projects, and tasks with secure authentication and collaboration features.

<img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge" /> <img src="https://img.shields.io/badge/node%20js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/express%20js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

---

## 🗝️ Key Features

* 🔐 Authentication (Google, Email/Password)
* 🏢 Multiple Workspaces
* 📊 Projects & Tasks
* ✅ Task CRUD (status, priority, assignee)
* 👥 Roles & Permissions (Owner, Admin, Member)
* ✉️ Invite Members
* 🔍 Filters & Search
* 📈 Analytics Dashboard
* 📅 Pagination & Load More
* 🔒 Cookie Session Management
* 🚪 Logout & Session Termination
* 🌱 Test Data Seeding
* 💾 Mongoose Transactions

---

## ⚙️ Installation & Setup

### 1️. Clone Repository

```bash
git clone https://github.com/AmanKrSahu/mindmesh.git
cd mindmesh
```

### 2️. Backend Setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 3️. Frontend Setup

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

---

## 🔧 Environment Variables

### 1. Backend `.env`

```env
PORT=8000
NODE_ENV=development

MONGO_URI="mongodb+srv://<username>:<password>@<>.mongodb.net/"

JWT_SECRET="jwt_secret_key"
JWT_EXPIRES_IN="1d"

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

FRONTEND_ORIGIN=http://localhost:5173
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:5173/google/callback
```

### 2. Frontend `.env.local`

```env
VITE_API_BASE_URL="http://localhost:8000/api"
```

---

## 📊 Demo Data (Seeding)

Run in **backend**:

```bash
npm run seed
```

---

## 🛡️ Role-based Permissions

| Role   | Permissions                                                |
| ------ | ---------------------------------------------------------- |
| Owner  | Full access (workspace, projects, tasks, members, roles)   |
| Admin  | Manage projects, epics, tasks, and members (except Owners) |
| Member | View & update assigned tasks                               |

---

## Features and Interfaces

1. Sign-In Page

<img width="1920" height="1080" alt="sign-in" src="https://github.com/user-attachments/assets/a01b8a73-1037-4f6f-8af4-d4b5c3cc833d" />

2. Dashboard Page

<img width="1920" height="1080" alt="dashboard" src="https://github.com/user-attachments/assets/65fa18b1-edd3-4738-90b2-07b03ce55ca9" />

3. Task Page

<img width="1920" height="1080" alt="task" src="https://github.com/user-attachments/assets/3614572b-9406-4ba7-b9f4-52be592ecf8a" />

4. Members Page

<img width="1920" height="1080" alt="members" src="https://github.com/user-attachments/assets/1a5dcaf6-3f32-4d04-b633-895ed0538054" />

---

## 🚀 Need Help??

Feel free to contact me on [Linkedin](https://www.linkedin.com/in/amankrsahu)

[![Instagram URL](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/itz.amansahu/) &nbsp; [![Discord URL](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](discordapp.com/users/539751578866024479)
