# Complaint & Suggestion Portal

A full-stack application that allows users to submit complaints or suggestions and track their status. 
Administrators can manage all submissions and update their statuses through a dedicated dashboard.

## Features

- **User Authentication:**  
  Users can sign up and log in using JWT-based authentication. Passwords are hashed with bcrypt to ensure security.

- **Complaint Submission:**  
  Authenticated users can submit complaints and suggestions. Each submission is associated with the user who filed it.

- **Complaint Tracking:**  
  Users can view the status of their own complaints, while administrators can view all complaints and update their statuses (e.g., Pending, Resolved, In Progress).

- **Protected Routes:**  
  The application uses protected routes both on the frontend and backend to ensure that only authorized users can access sensitive parts of the system.

## Technologies

### Frontend
- **React:** For building the user interface and managing component state.
- **React Router:** To handle client-side routing and navigation between pages.
- **Axios:** For making HTTP requests to the backend API.
- **JWT-Decode:** For decoding JSON Web Tokens to retrieve user details.
- **Vite:** Provides a fast development environment and build tool for the project.

### Backend
- **Express.js:** A minimal and flexible Node.js web application framework used for building the API.
- **MongoDB & Mongoose:** MongoDB serves as the NoSQL database, and Mongoose is used for object data modeling (ODM).
- **bcryptjs:** Used to hash passwords before storing them in the database.
- **jsonwebtoken:** To create and verify JWT tokens used for authenticating requests.
- **Cors:** Enables cross-origin resource sharing to allow the frontend and backend to communicate.

## Project Structure

This project is organized into two main parts: **backend** and **frontend**. Below is a simplified folder structure to help you understand where each piece of code resides:

complaint-suggestion-system/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Auth.jsx
│   │   │   ├── Complaint.jsx
│   │   │   ├── ComplaintOption.jsx
│   │   │   ├── ComplaintStatus.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── ThankYou.jsx
│   │   ├── middleware/          # Optional frontend middleware or helper functions
│   │   │   └── authMiddleware.js
│   │   ├── service/             # API service configuration (Axios)
│   │   │   └── api.js
│   │   ├── styles/              # CSS files for component styling
│   │   │   ├── AdminDashboard.css
│   │   │   ├── Auth.css
│   │   │   ├── Complaint.css
│   │   │   ├── ComplaintOption.css
│   │   │   ├── ComplaintStatus.css
│   │   │   ├── Footer.css
│   │   │   ├── Header.css
│   │   │   └── NotFound.css
│   │   ├── App.jsx              # Main React App component with routing
│   │   └── main.jsx             # Entry point for the React application
│   ├── .env                   # Frontend environment variables (Vite)
│   |── index.html           # HTML template for the React application
│   └── package.json           # Frontend dependencies and scripts
├── server/
│   ├── config/
│   │   └── database.js          # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js    # User signup and login logic
│   │   └── complaintController.js  # Complaint submission, fetching, and updating logic
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT verification and route protection
│   ├── module/
│   │   ├── User.js              # Mongoose User model (with password hashing)
│   │   └── Complaint.js         # Mongoose Complaint model
│   ├── routes/
│   │   ├── authRoutes.js        # Authentication routes (signup & login)
│   │   └── complaintRoutes.js   # Complaint-related API routes
│   ├── .env                   # Backend environment variables
│   └── server.js              # Main Express server setup
└── README.md                  # This README file
