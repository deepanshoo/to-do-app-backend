const Task = require("../models/Task");

const taskController = {
  async getAllTasks(req, res) {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getTaskById(req, res) {
    try {
      const taskId = req.params.id;
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createTask(req, res) {
    try {
      const taskData = req.body;
      const task = await Task.create(taskData);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateTask(req, res) {
    try {
      const taskId = req.params.id;
      const taskData = req.body;
      const task = await Task.findByIdAndUpdate(taskId, taskData, { new: true });
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteTask(req, res) {
    try {
      const taskId = req.params.id;
      const task = await Task.findByIdAndDelete(taskId);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      res.status(200).json({ msg: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = taskController;
