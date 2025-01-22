# To-Do App

A sleek and responsive **To-Do List Application** built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Manage your tasks effortlessly with an intuitive UI and powerful backend.

---

## 🚀 Features

- **Add Tasks:** Quickly add new tasks to your list.
- **View Tasks:** Organized view with active and completed sections.
- **Mark as Completed:** Check off tasks when done.
- **Edit Tasks:** Inline editing for task titles.
- **Delete Tasks:** Remove tasks easily.
- **Responsive Design:** Looks great on desktop and mobile devices.

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Bootstrap (for styling)
- Axios (for API calls)

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## 💻 Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- MongoDB
- npm or yarn

### Steps to Run Locally

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/todo-app.git
    cd todo-app
    ```

2. **Backend Setup**:
    ```bash
    cd todo-app-backend
    npm install
    ```

    - Create a `.env` file in the `todo-app-backend` directory:
      ```env
      MONGO_URI=<your_mongodb_connection_string>
      PORT=5000
      ```

    - Start the server:
      ```bash
      node server.js
      ```

    Backend will be running at: `http://localhost:5000`

3. **Frontend Setup**:
    ```bash
    cd ../todo-frontend
    npm install
    ```

    - Start the development server:
      ```bash
      npm start
      ```

    Frontend will be running at: `http://localhost:3000`

4. **Open in Browser**:
    Visit `http://localhost:3000` to start using the app!

---

## 📁 Project Structure

### Backend (`todo-app-backend`)
```
├── models
│   └── Task.js      # Task Schema
├── routes
│   └── tasks.js     # Task API routes
├── server.js        # Main server file
└── package.json     # Backend dependencies
```

### Frontend (`todo-frontend`)
```
├── src
│   ├── components
│   │   └── TaskList.js   # Main task management component
│   ├── api.js            # Axios instance for API calls
│   └── App.js            # Root component
├── public
│   └── index.html        # Main HTML file
└── package.json          # Frontend dependencies
```

## 🧑‍💻 Future Enhancements

- Add user authentication.
- Implement task prioritization.
- Add due dates and reminders.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 💬 Contact

For questions or support, feel free to contact:
- **Email:** pawigunasekare.18@gmail.com
- **GitHub:** https://github.com/Pawithra

---

Enjoy building and managing your tasks with the To-Do App! 🎉
