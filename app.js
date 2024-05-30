// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(cookieParser());

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", isAuthenticated, userRoutes);

const staffRoutes = require("./routes/staff.routes");
app.use("/staff", staffRoutes);

const appointmentRoutes = require("./routes/appointment.routes");
app.use("/appointment", isAuthenticated, appointmentRoutes);



/* const staffRoutes = require("./routes/staff.routes");
app.use("/staff", isAuthenticated, staffRoutes); */

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
