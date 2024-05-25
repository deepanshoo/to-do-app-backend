# MERN ToDo App

## Overview

The MERN ToDo App is a task management application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, read, update, and delete tasks. The app features a clean and responsive design that works well on both desktop and mobile devices.

## Features

- Create new tasks with a title, description, and due date.
- View a list of all tasks.
- Update the status of tasks (e.g., mark as in-progress, completed).
- Edit existing tasks.
- Delete tasks.
- Responsive design for mobile and desktop.

## Technologies Used

- **MongoDB**: A NoSQL database to store tasks.
- **Express.js**: A web application framework for Node.js to handle routing and server-side logic.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime to build the server-side application.
- **Axios**: A promise-based HTTP client for the browser and Node.js to make API requests.
- **CSS**: For styling the application.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running on your machine or a MongoDB Atlas account.

### Installation

1. **Clone the repository:**

   git clone https://github.com/yourusername/mern-todo-app.git
   cd mern-todo-app

2. **Install server dependencies:**

    cd server
    npm install

3. **Install client dependencies:**

    cd ../client
    npm install

4. **Environment Variables:**

    Create a .env file in the server directory and add the following environment variables:


    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    Replace your_mongodb_connection_string with your actual MongoDB connection string.

5. **Running the Application:**

    1. **Start the server:**

        cd server
        npm start
        The server will run on http://localhost:5000.

    2. **Start the client:**

        cd ../client
        npm start
        The client will run on http://localhost:3000.

6. **Using the Application:**

    Open your browser and navigate to http://localhost:3000.
    Use the form to create new tasks by providing a title, description, and due date.
    View the list of tasks.
    Update the status of tasks by clicking the appropriate button.
    Edit tasks by clicking the "Edit" button and updating the task details.
    Delete tasks by clicking the "Delete" button.