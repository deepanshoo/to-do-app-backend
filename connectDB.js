const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/todosdb";
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectToMongoDB;
