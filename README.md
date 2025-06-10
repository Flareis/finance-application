# 💸 Finance Application

Complete application for financial management, composed of a backend (Node.js, TypeScript, Prisma) and a frontend (Angular).

---

## 🧰 Technologies and Tools

### Backend
- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Dotenv
- TS-Node-Dev

### Frontend
- Angular
- TypeScript
- RxJS
- Angular CLI

---

## 🚀 Features

- User registration
- Registration and listing of financial transactions
- Data validation
- Integration with relational database (PostgreSQL)
- Use of migrations with Prisma
- Web interface for interacting with system features

---

## 🗂️ Project Structure

```
finance-application/
├── finance-backend/
│   ├── src/
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   ├── prisma
│   │   ├── middlewares
│   │   ├── utils
│   │   └── index.ts
│   └── ...
├── finance-frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── ...
│   └── ...
└── README.md
```

---

## 🛠️ How to Run the Project

### Backend

1. Clone the repository  
   `git clone https://github.com/Flareis/finance-application.git`

2. Install dependencies  
   `cd finance-backend`  
   `npm install`

3. Configure the `.env` file with your PostgreSQL database credentials

4. Run the migrations  
   `npx prisma migrate dev`

5. Start the server  
   `npm run dev`

### Frontend

1. Install dependencies  
   `cd ../finance-frontend`  
   `npm install`

2. Start the development server  
   `ng serve`

3. Access the application in your browser  
   `http://localhost:4200`

---

## 📌 Notes

- The backend exposes a REST API for integration with the Angular frontend.
- The frontend consumes the API to display and manage financial data.
- The project is open to improvements and contributions!

---

## 👩‍💻 Developed by

Flávia dos Reis – [linkedin.com/in/flaviadosreis](https://linkedin.com/in/flaviadosreis)
