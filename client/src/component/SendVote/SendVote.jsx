import React, { useState } from "react";
import { Button, Alert, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { putVote, setMessage } from "../../store/vote/actions";
import style from "../../App.module.css";
import { Redirect } from "react-router-dom";

const SendVote = (props) => {
  const [number, setNumber] = useState(null);

  let numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i);
  }

  const sendVote = (e) => {
    e.preventDefault();
    props.setMessage("");
    const value = Number(e.target.value);
    setNumber(value);
    props.putVote(value);
  };

  return (
    <div>
      <div className={style.buttonVote}>
        <Badge pill variant="light">
          <h3>Choose your favorite number</h3>
        </Badge>
      </div>

      {props.isRedirect ? (
        <Redirect to="/" />
      ) : (
        <div>
          {numbers.map((num) => {
            return (
              <div className={style.buttonVote}>
                <Button
                  key={num}
                  size="lg"
                  variant="outline-primary"
                  onClick={sendVote}
                  value={num}
                >
                  {num}
                </Button>
                {number === num && (
                  <Alert key={num} variant="primary">
                    {props.message}
                  </Alert>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  const { message, isRedirect } = state.votePage;
  return { message, isRedirect };
};

export default compose(connect(mapStateToProps, { putVote, setMessage }))(
  SendVote
);
