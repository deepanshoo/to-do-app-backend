const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// GET /tasks: Retrieve all tasks.
router.get("/tasks", taskController.getAllTasks);

// GET /tasks/:id: Retrieve a single task by ID.
router.get("/tasks/:id", taskController.getTaskById);

// POST /tasks: Create a new task.
router.post("/tasks", taskController.createTask);

// PUT /tasks/:id: Update an existing task by ID.
router.put("/tasks/:id", taskController.updateTask);

// DELETE /tasks/:id: Delete a task by ID.
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
