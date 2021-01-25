import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logsReducer from "./logs/reducer";
import voteReducer from "./vote/reducer";

const reducers = combineReducers({
  votePage: voteReducer,
  logsPage: logsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
