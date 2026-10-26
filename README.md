# Sunray Hospital (SVR Neuro & Nephro Care) — Healthcare Web Portal

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic%20Markup-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Responsive%20Design-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

A modern, responsive healthcare and hospital web portal developed for **Sunray Hospital (SVR Neuro & Nephro Care)**, a premier 4.8★ rated multispecialty hospital located at Nadivanka Junction, Anantapur. The portal delivers seamless patient triage, specialized department exploration, doctor consultation scheduling, and 24/7 emergency care access.

---

## 🏥 Problem Solved & Overview

Patients seeking urgent neurological, nephrological, and emergency medical assistance need rapid access to doctor availability, specialized department details (such as Hemodialysis and Neuro ICU), and direct appointment booking without high latency or confusing navigation.

This web application solves that by providing an intuitive, accessible patient interface engineered with semantic markup, fast load performance, clear medical emergency protocols, and localized clinical information.

---

## ✨ Core Features

- **Doctor Directory & Profiles:** Detailed profiles of senior specialists (Neurology, Nephrology, General Medicine, Neurosurgery) displaying qualifications, experience, and consultation hours.
- **Interactive Appointment Booking:** Patient-friendly scheduling flow with department filtering, preferred date/time slot selection, patient symptom capture, and instant booking summary.
- **Specialized Department Showcases:** Dedicated sections for Hemodialysis Center, Neuro ICU, 24/7 Emergency Triage, Dialysis schedules, and Laboratory Services.
- **Emergency Action Bar:** Fixed high-contrast quick-dial and emergency action triggers designed for rapid mobile touch interaction during critical medical situations.
- **Location & Contact Integration:** Complete address mapping (Nadivanka Junction, Bellary Road), Google Maps directions, and direct telephone call routing.
- **Structured Medical SEO:** Implemented Schema.org `Hospital` JSON-LD structured data with geo-coordinates, operating hours, telephone, and aggregate star ratings.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Architecture** | Semantic HTML5, Schema.org Medical Entity JSON-LD |
| **Styling** | Vanilla CSS3, Healthcare Design System (Clinical blues & accessible neutrals), CSS Grid, Flexbox |
| **Interactivity** | Vanilla JavaScript (ES6+), Modal Dialog Controllers, Appointment State Validation |
| **Configuration** | Vercel Serverless Edge Hosting (`vercel.json`) |

---

## 📂 Project Structure

```
Sunray-svr-hospital/
├── index.html         # Main healthcare landing page, departments, doctor directory & booking modal
├── app.js             # Client application logic, appointment validation, doctor filtering & modals
├── styles.css         # Clinical design system, typography, accessible color contrast & responsive breakpoints
├── vercel.json        # Deployment configuration & clean routing
├── assets/            # Hospital imagery, specialist headshots, icons & facility previews
├── .gitignore         # Version control exclusion rules
├── LICENSE            # MIT License
└── README.md          # Comprehensive technical documentation
```

---

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/syeddmahammadalthaf-glitch/Sunray-svr-hospital.git
   cd Sunray-svr-hospital
   ```

2. **Serve the project:**
   You can open `index.html` directly in any web browser or use a local HTTP server:
   ```bash
   # Python 3
   python -m http.server 8080

   # Or npx serve
   npx serve .
   ```

3. **Navigate to:**
   `http://localhost:8080`

---

## 🎯 Technical Decisions & Accessibility

- **High Contrast & WCAG Standards:** Medical web applications must remain readable under adverse lighting or stressful situations. High contrast color ratios (Navy `#091e36` and medical accents `#0ea5e9`) were chosen to adhere to WCAG 2.1 AA accessibility guidelines.
- **Lightweight Vanilla Foundation:** Minimized page weight by avoiding heavy dependencies, ensuring that patients on low-bandwidth 3G/4G connections can load hospital emergency numbers and doctor schedules in under 1 second.
- **Robust Input Validation:** Form controls validate phone numbers, appointment dates, and required symptoms before submission to prevent invalid appointment records.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
