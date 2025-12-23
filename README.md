# 🎮 Esports Content Creator Collaboration Platform (Frontend)

This repository contains the frontend for the Esports Content Creator Collaboration Platform.
The project is built using **React + Vite + Tailwind CSS** and follows a **feature-based, scalable structure**.

---

## 🚀 Project Goal

To provide a dedicated platform where:
- Content creators can hire esports freelancers
- Freelancers can sell services (editing, thumbnails, SEO, etc.)
- Collaboration happens securely with timelines, ratings, and dashboards

---

## 🧱 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- GitHub (PR-based workflow)

---

## 📁 Project Structure (High Level)

src/
├── assets/ # Images, icons
├── components/ # Reusable UI components
├── pages/ # Full page screens
├── routes/ # App routing (lead-owned)
├── services/ # API calls (Phase 2)
├── context/ # Global state (Phase 2)
├── hooks/ # Custom hooks
├── utils/ # Constants & helpers
├── App.jsx # App container (locked)
├── main.jsx # Entry point (locked)
└── index.css # Tailwind + global styles


---

## 🧩 Folder Responsibilities

### `components/`
Reusable UI blocks (buttons, cards, profile sections, admin tables).

### `pages/`
Complete screens like:
- Landing
- Marketplace
- Profile
- Dashboard
- Admin

Pages **compose components**, they do not contain reusable logic.

### `routes/`
All routing logic.
This folder is **lead-owned**.

### `services/`
API interaction layer.
Used only in **Phase 2**.

---

## 🔒 Locked (Lead-Owned) Files

The following files should NOT be modified by team members:

src/App.jsx
src/main.jsx
src/routes/*
src/components/layout/*
tailwind.config.js
postcss.config.js


Any PR touching these files will not be merged.

---

## 👥 Team Workflow

- Each feature is developed in a separate `feature/*` branch
- All changes are merged into `dev` via Pull Requests
- No direct pushes to `dev` or `main`

---

## 🚧 Development Phases

### Phase 1 – UI & Structure (Current)
- Build all pages using dummy data
- No backend integration
- No authentication logic
- Focus on layout, components, and consistency

### Phase 2 – Behavior & API Integration
- Authentication & role-based access
- Backend API integration
- Chat, payments, dashboards

---

## ✅ Definition of Done (Phase 1)

- App runs without errors
- All pages render correctly
- Navigation works
- Tailwind styling applied
- Clean and consistent structure

---

## 📌 Important Notes

- Use Tailwind CSS for styling
- Use common components (`Button`, `Input`, `Card`)
- Do NOT add backend logic in Phase 1

---

## 🏁 Final Note

This structure is frozen for Phase 1.
Features will be built on top of this skeleton.

Happy coding 🚀

