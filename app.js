const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");

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

app.listen(PORT, () =>
  log(`Wow! Server is running on http://localhost:${PORT}`)
);
