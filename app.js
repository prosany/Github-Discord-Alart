const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");

// Custom Imports
const { PORT } = require("./Config");
const log = require("./Helper/log");
const { urlencoded } = require("express");

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

app.listen(PORT, () =>
  log(`Wow! Server is running on http://localhost:${PORT}`)
);
