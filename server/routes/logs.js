const express = require("express");
const logsServices = require("../services/LogsServices");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const logs = await logsServices.getAllLogs();
    await logsServices.addNewLog(req.originalUrl);
    res.status(200).json(logs);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
