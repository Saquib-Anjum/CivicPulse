# 🏙️ CivicPulse

> **Your City. Your Voice. Your Action.**  
A smart reporting platform that empowers citizens to report local civic issues like potholes, garbage dumps, and water leaks — directly to the right authorities.

---
<p align="center">
  <img src="https://github.com/Saquib-Anjum/CivicPulse/blob/main/frontend/public/logo.png" size={10}/>
  
</p>

## 📌 Problem Statement

People often struggle to report and track everyday civic issues due to outdated, inefficient systems. CivicPulse solves this by providing a centralized platform where citizens can easily report problems with images and location data — and the system automatically routes them to the concerned departments.

---

## 🎯 Key Features

- 📷 Report civic issues with images and live GPS location
- 🗺️ View submitted issues on a map
- 📁 See your own submitted reports
- 🔐 Google Authentication
- 📨 Real-time data sync with Firebase
- 🧑‍💻 (Optional) Admin dashboard to manage all issues

---

## 🚀 Live Demo

🔗 [View CivicPulse on Netlify](https://civic-pulse-sooty.vercel.app/)

---

## 📸 Screenshots

| Home Page | Report Page |
|-----------|-------------|
| ![Home](https://github.com/Saquib-Anjum/CivicPulse/blob/main/Screenshot/image.png) | ![Report](https://github.com/Saquib-Anjum/CivicPulse/blob/main/Screenshot/Screenshot%202025-04-26%20084132.png) |



---

## 🔧 Tech Stack & Purpose

| Tech | Purpose |
|------|---------|
| **React + Vite** | Fast and modern frontend framework for building UI |
| **Firebase Authentication** | Secure login with Google |
| **Firebase Firestore** | Real-time database to store issues |
| **Firebase Storage** | Stores uploaded images |
| **Google Maps API** | To pick or show live location on map |
| **React Router DOM** | Routing between pages |
| **Tailwind CSS** | Utility-first styling for a clean UI (optional) |

---

## 🗂️ Project Structure


---

## 🔐 .env.example

Create a `.env` file in your root folder and add the following:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

VITE_GOOGLE_MAPS_API_KEY=your_maps_key
```

---
### Clone the repo
```
git clone https://github.com/your-username/civicpulse.git
```

### Navigate to the folder
```
cd civicpulse
```

### Install dependencies
```
npm install
```

### Start the dev server
```
npm run dev
```
