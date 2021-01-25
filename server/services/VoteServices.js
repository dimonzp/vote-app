const Vote = require("../models/Vote");
const getDate = require("../utils/getDate");

const voteService = {
  async addVote(number) {
    const date = getDate();
    Vote.create({ number, date });
  },
  async getStatistic(date) {
    const numbersOfDate = await Vote.find({ date: new Date(date) });
    let stat = [];
    numbersOfDate.forEach((vote) => {
      let num = stat.find((i) => i.number === vote.number) || {};
      if (vote.number === num.number) {
        stat[stat.indexOf(num)].count++;
      } else {
        stat.push({ number: vote.number, count: 1 });
      }
    });
    return stat;
  },
};

module.exports = voteService;
