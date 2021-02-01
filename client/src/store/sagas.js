import { takeEvery, put, call, all } from "redux-saga/effects";
import { logAPI, voteAPI } from "../api/api";
import { LOAD_LOGS, setLogs } from "./logs/actions";
import {
  LOAD_STATISTIC,
  PUT_VOTE,
  setIsRedirect,
  setMessage,
  setVotesToState,
} from "./vote/actions";

const delay = (ms) => new Promise((response) => setTimeout(response, ms));

//put vote for number and set message to state
function* workerPutVote(action) {
  const message = yield call(voteAPI.putVote, action.number);
  yield put(setMessage(message));
  yield delay(2500);
  yield put(setIsRedirect(true));
}
export function* watchPutVote() {
  yield takeEvery(PUT_VOTE, workerPutVote);
}

//get statistic of date
function* workerLoadStatistic(action) {
  const stat = yield call(voteAPI.getStat, action.date);

  yield put(setVotesToState(stat));
  yield put(setIsRedirect(false));
}
export function* watchLoadStatistic() {
  yield takeEvery(LOAD_STATISTIC, workerLoadStatistic);
}

//get allLogs
function* workerLoadLogs() {
  const logs = yield call(logAPI.getAllLogs);
  yield put(setLogs(logs));
}
export function* watchLoadLogs() {
  yield takeEvery(LOAD_LOGS, workerLoadLogs);
}

export default function* rootSaga() {
  yield all([watchPutVote(), watchLoadStatistic(), watchLoadLogs()]);
}
