require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// DB
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 لهفة خاطر API شغال");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});