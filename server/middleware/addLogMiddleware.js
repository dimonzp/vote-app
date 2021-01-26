const logsServices = require("../services/LogsServices");

module.exports = async (req, res, next) => {
  try {
    const  number  = req.body.number || "";
    logsServices.addNewLog(req.originalUrl, number);
    next();
  } catch (error) {
    return res.status(400).json({ message: "Internal error" });
  }
};
