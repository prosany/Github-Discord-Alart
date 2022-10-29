const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const createError = require("http-errors");

// Custom Imports
const { PORT } = require("./Config");
const log = require("./Helper/log");

// Imports Routes
const HomeRoute = require("./Routes/Home.Routes");
const PlatformRoute = require("./Routes/Platform.Routes");

// Initialize app
const app = express();

// Applying Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  compression({
    level: 6,
  })
);

// Initialize Routes
app.use("/", HomeRoute);
app.use("/platform", PlatformRoute);

// Error Handling
app.use(async (req, res, next) => {
  next(createError.NotFound("Path you're requested was not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: 0,
    message: err.message,
  });
});

app.listen(PORT, () =>
  log(`Wow! Server is running on http://localhost:${PORT}`)
);
