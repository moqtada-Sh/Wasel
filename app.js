const express = require('express');
const logger = require('morgan');

const app = express();

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// test route
app.get('/', (req, res) => {
  res.json({
    message: "Wasel Mobility API running"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

module.exports = app;