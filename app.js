const express = require('express');
const logger = require('morgan');

const app = express();
const db = require("./database/connection");

// ===== Import Module Routes =====
const alertsRoutes = require("./modules/alerts/alerts.routes");
const incidentsRoutes = require("./modules/incidents/incidents.routes");
const reportsRoutes = require("./modules/reports/reports.routes");
const routingRoutes = require("./modules/routing/routing.routes");

// ===== Middlewares =====
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ===== Test Route =====
app.get('/', (req, res) => {
  res.json({
    message: "Wasel Mobility API running"
  });
});

// ===== Database Test Route =====
app.get("/test-db", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {

    if (err) {
      return res.status(500).json({
        message: "Database error",
        error: err
      });
    }

    res.json({
      message: "Database connected successfully",
      data: results
    });

  });
});

// ===== API Routes =====
app.use("/api/alerts", alertsRoutes);
app.use("/api/incidents", incidentsRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/routing", routingRoutes);

// ===== 404 Handler =====
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

// ===== Server =====
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;