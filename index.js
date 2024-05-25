require("dotenv").config();
const express = require("express");
const connectToMongoDB = require("./connectDB");
const router = require("./routes/routes");
const cors = require('cors')

const app = express();
app.use(cors(
  {
      origin: ["https://to-do-app-frontend-gold.vercel.app/"],
      methods: ["POST", "GET","DELETE","PUT"],
      credentials: true
  }
));
app.use(express.json());

// Connect to MongoDB
connectToMongoDB();

// Use routes
app.use("/todo", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
