# CareeZ v2.0 🎓
### Complete Career Guidance Platform for Indian Students

---

## 📁 Project Structure

The project uses a clean, frontend-first architecture built with modern CSS and Vanilla JS, connecting to a Supabase backend for Authentication and Database.

```
careez-v2/
├── index.html          ← Landing page (public)
├── signup.html         ← Create account (Email & Google Auth)
├── login.html          ← Login page
├── student_details.html← Career + education profile setup
├── roadmap.html        ← 🌟 MAIN: Personalized stage-by-stage career roadmap
├── dashboard.html      ← Overview & quick stats
├── Careers.html        ← Browse all career paths
├── Exams.html          ← Entrance exam information
├── PYQs.html           ← Previous year question papers repository
├── Resources.html      ← Curated books, videos, and websites
├── profile.html        ← User profile & settings
├── supabase-config.js  ← Supabase client & global auth handlers
├── careers-data.js     ← Core career progression data
└── .env               ← Environment variables for Supabase keys
```

---

## 🚀 Getting Started

### 1. Setup Supabase
1. Create a project at [supabase.com](https://supabase.com).
2. Go to **Project Settings > API**.
3. Copy your **Project URL** and **Anon Public Key**.
4. Update these in `supabase-config.js` or create a `.env` file.

### 2. Running Locally
The project uses ES Modules, so it requires a local server.

```bash
# Using Python
python -m http.server 5500

# Using Node (recommended)
npx serve -p 5500 .
```
Access the app at `http://localhost:5500`.

---

## 🎯 Key Features

### 🔐 Robust Authentication
- **Multi-Provider Auth**: Support for Google OAuth and traditional Email/Password.
- **Session Intelligence**: Stays logged in across page reloads using `onAuthStateChange`.
- **Protected Routes**: Automatic redirection for unauthenticated users on private pages.

### 🗺️ Dynamic Roadmap Engine
- **8+ Specialized Paths**: Covering UPSC, NEET, JEE, CA, Banking, and more.
- **Stage Tracking**: Mark stages as complete and watch your progress bar grow.
- **Smart Resources**: Integrates with the `Resources` table to suggest content tailored to your current stage.

### 📚 Digital Library
- **PYQ Repository**: Quick access to Previous Year Questions.
- **Curated Learning**: Verified YouTube videos, books, and website links.
- **Profile Dashboard**: A central hub for your career stats and goals.

---

## 🔌 Backend Architecture

Powered by **Supabase (PostgreSQL)** with RLS (Row Level Security).

| Table | Description |
|-------|-------------|
| **Profile** | Extends Auth user with education level and chosen career path. |
| **Roadmap** | Stores user progress (completed stages) for each career. |
| **Resources**| A global list of study materials with tags and metadata. |
| **Careers** | Static/Dynamic data for career stages and requirements. |

---

## 🎨 Design System

CareeZ uses a "Deep Dark" premium aesthetic designed to reduce eye strain during long study sessions.

- **Background**: `#06080f` (Deep Obsidian)
- **Surfaces**: `#0d1117` (Glassmorphism inspired)
- **Accent**: `#6366f1` (Vibrant Indigo)
- **Typography**: Syne (Headers) & Manrope (Body)

---

## 📱 Compatibility
- Optimized for Chrome, Firefox, Safari, and Edge.
- Fully responsive "Mobile-First" design.

---

© 2026 CareeZ — Empowering the next generation of Indian professionals.
