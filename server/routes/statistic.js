const express = require("express");
const Vote = require("../models/Vote");
const logsServices = require("../services/LogsServices");
const voteService = require("../services/VoteServices");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { date } = req.query;
    const stat = await voteService.getStatistic(date);
    res.status(200).json(stat);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
