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