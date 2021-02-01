import { SET_IS_REDIRECT, SET_MESSAGE, SET_STATISTIC_TO_STATE } from "./actions";

const initialState = {
  votes: [],
  message: "",
  isRedirect: false
};

export const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE: {
      return { ...state, ...action.message };
    }
    case SET_IS_REDIRECT: {
      
      return { ...state, isRedirect: action.isRedirect };
    }
    case SET_STATISTIC_TO_STATE: {
      return { ...state, votes: action.votes}
    }

    default:
      return state;
  }
};

export default voteReducer;
