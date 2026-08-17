# 🚀 NEXORA — Project Management & Collaboration Platform

<p align="center">
  <img src="https://img.shields.io/badge/NEXORA-Project%20Manager-4A90E2?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-Backend-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-Deployed-222222?style=for-the-badge&logo=github" />
</p>

<p align="center">
  <strong>A modern project management and collaborative workspace designed to simplify teamwork, organize projects, and manage tasks efficiently.</strong>
</p>

<p align="center">
  🌐 <strong>Live Demo:</strong>
  <a href="https://jayeshgujar327.github.io/NEXORA/">
    NEXORA
  </a>
</p>

---

## ✨ About NEXORA

**NEXORA** is a modern project management and collaboration platform designed to help individuals and teams organize their work in one place.

The platform provides a centralized workspace where users can create and manage projects, organize tasks, collaborate with other users, and keep track of their workflow.

The goal of NEXORA is simple:

> **Simplify your workflow. Organize your work. Build better together.**

---

## 🎯 Key Features

### 🏠 Landing Page
- Modern responsive landing page
- Project introduction
- About section
- Feature showcase
- Developer section
- Responsive navigation
- Dark/light theme support

### 📊 Dashboard
- Project overview
- Total collaborators
- Total projects
- Total tasks
- Quick project actions
- Interactive workspace

### 📁 Project Management
- Create new projects
- Join existing projects
- Edit projects
- Delete projects
- View project details
- Copy project information
- Project workflow management

### ✅ Task Management
- Create tasks
- Edit tasks
- Delete tasks
- View task details
- Organize tasks according to workflow
- Task progress management

### 👥 Collaboration
- Collaborative project workspace
- Project joining system
- User-based project management
- Shared project workflow

### 🔐 Authentication
- User registration
- User login
- Logout functionality
- User profile
- Firebase Authentication

### 🎨 User Experience
- Responsive interface
- Theme switching
- Interactive buttons
- Loading animations
- Toast notifications
- Smooth UI animations
- Modern dashboard design

### 📧 Developer Notifications
NEXORA also includes EmailJS integration for developer notifications and application events.

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** | Frontend UI |
| **Vite** | Development & build tool |
| **JavaScript** | Application logic |
| **Tailwind CSS** | Styling |
| **Firebase** | Authentication & database services |
| **React Router** | Client-side routing |
| **React Toastify** | Notifications |
| **EmailJS** | Email notifications |
| **Font Awesome** | Icons |
| **Git** | Version control |
| **GitHub** | Source code hosting |
| **GitHub Pages** | Deployment |

---

# 🏗️ Project Architecture

```text
NEXORA/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── SS.png
│   │   └── homeIMG.jpg
│   │
│   ├── auth/
│   │   ├── login.jsx
│   │   ├── logout.jsx
│   │   ├── profile.jsx
│   │   └── register.jsx
│   │
│   ├── connection/
│   │   ├── projectDB.jsx
│   │   ├── tasksDB.jsx
│   │   └── userDB.jsx
│   │
│   ├── landing/
│   │   ├── home.jsx
│   │   ├── about.jsx
│   │   └── features.jsx
│   │
│   ├── layouts/
│   │   ├── landingLayout.jsx
│   │   └── dashboardLayout.jsx
│   │
│   ├── site/
│   │   ├── Developer.jsx
│   │   ├── Developer.css
│   │   ├── nav.jsx
│   │   ├── notAllowed.jsx
│   │   │
│   │   ├── projects/
│   │   │   ├── xaddproject.jsx
│   │   │   ├── xdeleteproject.jsx
│   │   │   ├── xeditproject.jsx
│   │   │   ├── xjoinproject.jsx
│   │   │   └── xprojectcard.jsx
│   │   │
│   │   ├── tasks/
│   │   │   ├── xaddtask.jsx
│   │   │   ├── xdeletetask.jsx
│   │   │   ├── xedittask.jsx
│   │   │   ├── xtaskcard.jsx
│   │   │   └── xtaskinside.jsx
│   │   │
│   │   ├── xhome.jsx
│   │   ├── xprojects.jsx
│   │   └── xtasks.jsx
│   │
│   ├── static/
│   │   ├── footer.jsx
│   │   ├── header.jsx
│   │   └── graphes.jsx
│   │
│   ├── style/
│   │   ├── index.css
│   │   ├── themeBtn.jsx
│   │   └── useTheme.jsx
│   │
│   ├── utility/
│   │   ├── animations.jsx
│   │   ├── brand.jsx
│   │   ├── btn.jsx
│   │   ├── emailNotification.js
│   │   ├── loading.jsx
│   │   ├── toast.jsx
│   │   └── typeWriter.jsx
│   │
│   ├── App.jsx
│   ├── firebase.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
