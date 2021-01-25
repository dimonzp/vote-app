//load heroes and set to state
export const SET_LOGS = "SET_HEROES";
export const LOAD_LOGS = "LOAD_LOGS";

export const loadLogs = () => ({ type: LOAD_LOGS });
export const setLogs = (logs) => ({ type: SET_LOGS, logs });
