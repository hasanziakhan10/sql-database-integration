const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = require("./config/database");
const studentRoutes = require("./routes/studentRoutes");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "SQL Database Integration API is running"
    });
});

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

sequelize
    .sync()
    .then(() => {
        console.log("MySQL database connected and tables synchronized");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });