const Vote = require("../models/Vote");
const getDate = require("../../client/src/utils/getDate");

const voteService = {
  async addVote(number) {
    const date = getDate();
    Vote.create({ number, date });
  },
  async getStatistic(date) {
    
    const stat = await Vote.aggregate([
      { $match: { date: new Date(date) } },
      { $group: { _id: "$number", count: { $sum: 1 } } },
    ]);

    return stat.map((n) => ({ number: n._id, count: n.count }));
  },
};

module.exports = voteService;
