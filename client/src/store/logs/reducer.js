import { SET_LOGS } from "./actions";

const initialState = {
  logs: []
};

export const logsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_LOGS : {
      return { ...state, logs: action.logs.reverse() };
    }

    default:
      return state;
  }
};

export default logsReducer;
