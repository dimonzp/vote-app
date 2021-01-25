//load votes and set to state
export const PUT_VOTE = "PUT_VOTE";
export const LOAD_STATISTIC = "LOAD_STATISTIC";

export const SET_MESSAGE = "SET_MESSAGE";
export const SET_STATISTIC_TO_STATE = "SET_STATISTIC_TO_STATE";

export const putVote = (number) => ({ type: PUT_VOTE, number });
export const loadStatistic = (date) => ({ type: LOAD_STATISTIC, date });

export const setMessage = (message) => ({ type: SET_MESSAGE, message });
export const setVotesToState = (votes) => ({
  type: SET_STATISTIC_TO_STATE,
  votes,
});
