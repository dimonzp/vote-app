import axios from "axios";

export const voteAPI = {
  async putVote(number) {
    const res = await axios.post("/vote", { number });
    return res.data;
  },
  async getStat(date) {
    
    const res = await axios.get(`/statistic`, { params:  {date}  });
    return res.data;
  },
};

export const logAPI = {
  async getAllLogs() {
    
    const res = await axios.get("/logs");
    return res.data;
  },
};
