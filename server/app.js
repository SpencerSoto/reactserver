// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");
const cors = require('cors')

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

app.use(
    cors({
        credential:true,
        origin:["http://localhost:3000","https://amazing-hoover-f75b63.netlify.app"]
    })
)

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const pinRoute = require("./routes/pin.routes");
app.use("/api/pins", pinRoute);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
