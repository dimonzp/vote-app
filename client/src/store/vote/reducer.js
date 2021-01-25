import { SET_MESSAGE, SET_STATISTIC_TO_STATE } from "./actions";

const initialState = {
  votes: [],
  message: "",
};

export const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE: {
      return { ...state, ...action.message };
    }
    case SET_STATISTIC_TO_STATE: {
      return { ...state, votes: action.votes}
    }

    default:
      return state;
  }
};

export default voteReducer;
