const express = require("express");
const app = express();
const eventRoutes = require("./routes/eventRoutes");
const { sequelize } = require("./models/index");

// Middleware
app.use(express.json());

// Routes
app.use("/api", eventRoutes);

// Test database connection and sync models
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Failed to sync database:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
