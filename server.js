const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo API is Running...");
});

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
