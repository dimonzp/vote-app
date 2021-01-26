const express = require("express");
const logsServices = require("../services/LogsServices");
const voteService = require("../services/VoteServices");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { number } = req.body;
    const num = Number(number)
    await voteService.addVote(num);
    res.status(200).json({ message: `Vote for ${number} confirmed` });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
