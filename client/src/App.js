import React from "react";
import { Route } from "react-router-dom";
import s from "./App.module.css";
import Header from "./component/Header/Header";
import Logs from "./component/Logs/Logs";
import Main from "./component/Main/Main";
import SendVote from "./component/SendVote/SendVote";

function App() {
  
  return (
    <div className={s.App}>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/vote" component={SendVote} />
      <Route exact path="/logs" component={Logs} />
      
    </div>
  );
}

export default App;
