# Tours App

A simple **Tour Management Application** built with **Node.js** and **Express**.

---

## 📦 Requirements

- Node.js (latest LTS recommended)
- npm or yarn
- (Optional) Database setup if extended beyond dev data

---

## 🧰 Installation & Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/M0hamedJR/tours-app.git
   ```

2. Navigate into the project folder:

   ```bash
   cd tours-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```

   or with nodemon (if installed):

   ```bash
   nodemon server.js
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## 🚀 Features

- List all tours
- View details of a single tour
- Create / update / delete tours (depending on course progression)
- MVC pattern with controllers, models, and routes
- Pug views for rendering dynamic pages

---

## 🛠️ Future Improvements

- Add user authentication & authorization
- Implement admin dashboard for managing tours
- Add image upload functionality for tours
- Pagination for large tour lists
- Separate frontend (React/Angular/Vue) with REST API
- Add automated testing (unit & integration tests)

---

## 🗂️ Project Structure

```
.
├── controllers/        # Application logic (controllers for routes)
├── dev-data/           # Sample development data (tours, users, etc.)
├── models/             # Database models / schemas
├── public/             # Static files (CSS, images, client-side JS)
├── routes/             # Application routes (API endpoints)
├── utils/              # Utility/helper functions
├── views/              # Views (e.g. Pug templates)
├── app.js              # Main application setup
├── server.js           # Server entry point
├── package.json
└── .gitignore
```
