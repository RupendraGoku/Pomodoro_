# 🛒 Multi-Vendor Price Comparison Platform

### *Search • Compare • Enquire • Connect with Sellers*

This repository contains a **full-stack multi-vendor price comparison web application** developed using **React, Node.js, Express, MongoDB Atlas, and Cloudinary**.

The platform allows users to **search products, compare prices from multiple sellers, view seller information, and send enquiries directly to sellers**, all from a single centralized system.

> 🚀 **Live Demo**: *(Add link if deployed)*

---

## 📌 About the Project

In today’s digital marketplace, buyers often need to visit multiple websites to compare prices, while small sellers struggle to maintain their own online presence.

This project solves both problems by providing:

* A **centralized product search and comparison system**
* **Multi-seller product listings**
* **Auto-generated seller presence** under a parent platform
* A **buyer enquiry system** to contact sellers directly
* A **scalable full-stack architecture** suitable for real-world deployment

The frontend and backend were developed collaboratively in the **same repository**, following modern **full-stack development practices**.

---

## 🎯 Project Objectives

* Enable users to search and compare products easily
* Display prices from multiple sellers in a single view
* Allow buyers to send enquiries without mandatory authentication
* Provide sellers visibility even without their own website
* Implement a clean, scalable **full-stack architecture**
* Follow industry-level frontend and backend best practices

---

## 🧪 Tech Stack

### 🌐 Frontend

* ⚛️ **React (Vite)**
* 🎨 **Tailwind CSS**
* 🔀 **React Router**
* 📦 Component-based architecture

### ⚙️ Backend

* 🟢 **Node.js**
* 🚀 **Express.js**
* 🔐 **JWT Authentication**
* 📡 RESTful APIs

### 🗄️ Database & Storage

* 🍃 **MongoDB Atlas** (Cloud Database)
* ☁️ **Cloudinary** (Image upload & management)

---

## ✨ Core Features

### 🔍 Product Discovery

* Search products by name
* Featured products section
* Grid-based product cards with highlights

### ⚖️ Price Comparison

* Dedicated comparison page
* Table-based seller price comparison
* Lowest price highlighting

### 🏪 Multi-Seller System

* Products linked to sellers
* Seller name shown directly from backend data
* Auto-generated seller storefront pages

### ✉️ Buyer Enquiry System

* Enquiry button on product cards
* Modal-based enquiry form
* Fields:

  * Name
  * Email
  * Mobile number (validated)
  * Product-specific message
* Client-side validation for better UX

### 🎨 UI / UX Enhancements

* Image zoom on hover
* Featured product badges
* Clean marketplace-style layout
* Responsive design

---

## 🧠 Frontend Architecture Highlights

* Reusable `ProductCard` component
* Enquiry logic encapsulated inside the card
* Section-specific UI logic (Featured Products)
* API-ready structure for backend integration
* Clean separation of UI and data logic

---

## ⚙️ Backend Highlights

* RESTful API architecture
* Secure authentication using JWT
* MongoDB Atlas for scalable data storage
* Cloudinary for optimized image uploads
* Structured controllers, routes, and models
* Validation on both client and server side

---

## 🔐 Validation & Security

* Frontend validation for better user experience
* Backend re-validation for security
* Mobile number validation using regex
* Secure API endpoints with role-based access

---

## 🧩📂 Project Folder Structure
*📁 Root
*B2B/
├── backend/
├── frontend/

📁 Backend Structure
backend/
├── config/          # DB & environment configuration
├── controllers/     # Request handling logic
├── middlewares/     # Auth & custom middleware
├── models/          # Mongoose schemas
├── routes/          # API routes
├── utils/           # Helper utilities
├── server.js        # Backend entry point
├── .env             # Environment variables
├── package.json

📁 Frontend Structure
frontend/
├── src/
│   ├── components/
│   │   ├── EnquiryModal.jsx
│   │   ├── ProductCard.jsx
│   │   ├── PriceTable.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── HeroCarousel.jsx
│   │
│   ├── context/
│   ├── mocks/               # Static data for UI demo
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── ProductCompare.jsx
│   │   ├── SearchResult.jsx
│   │   ├── SellerPage.jsx
│   │   ├── SellerDashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Profile.jsx
│   │
│   ├── services/            # API calls
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
│
├── index.html
├── .env
├── package.json

---

## 🔌 API Endpoints (Example)

```http
GET    /api/products/featured
GET    /api/products/search
GET    /api/products/compare/:id
POST   /api/enquiry
POST   /api/auth/login
POST   /api/auth/register
```

---

## 👥 Team Collaboration

This project was developed as a **group internship project**:

* **Frontend**: UI/UX, React components, Tailwind design, enquiry modal, validations
* **Backend**: API development, database design, authentication, Cloudinary integration

All development was done in a **single shared repository**, following collaborative GitHub workflow.

---

## 📈 Future Enhancements

* 📤 Enquiry management dashboard for sellers
* ⭐ Seller ratings & reviews
* 💰 Price trend analysis
* 🔔 Notification system
* 🛒 Order & payment integration
* 📊 Admin analytics panel

---

## 🙌 Internship Value

This project demonstrates:

* Full-stack development skills
* Real-world marketplace logic
* Frontend-backend collaboration
* Clean architecture & scalability
* Industry-ready coding practices

> *Frontend first for visualization, backend integration for production.*

---

## 📬 Contributors

* **Backend  & DB Developer**: *(Ashutosh Ranjan )*
* **Backend  & DB Developer**: *(Shivam Mandal )*
* * **Frontend Developer**: *(Rupendra Kumar )*

---

## 📄 License

This project is temperory private for **learning, internship evaluation, and collaboration**.
After making it public Feel free to fork, explore, and build upon it.

---

> *“Think full-stack, build scalable, and design for real users.”* 🚀
