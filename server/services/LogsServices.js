const Logs = require("../models/Logs");
const getDate = require("../../client/src/utils/getDate");

const logsServices = {
  async getAllLogs() {
    return await Logs.find();
  },
  async addNewLog(url, json = "") {
    const date = getDate(new Date(), true);
    await Logs.create({ url, json, date });
  },
};

module.exports = logsServices;
