import React, { useState } from "react";
import { Button, Alert, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { putVote, setMessage } from "../../store/vote/actions";
import style from "../../App.module.css";
import { Redirect } from "react-router-dom";

const SendVote = (props) => {
  const [number, setNumber] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const afterClick = () => {
    setIsRedirect(true);
    setLoading(false);
  };

  const sendVote = (e) => {
    e.preventDefault();
    props.setMessage("");
    const value = Number(e.target.value);
    setLoading(true);
    setNumber(value);
    props.putVote(value);
    setTimeout(afterClick, 3000)
  };

  return (
    <div>
      <div className={style.buttonVote}>
        <Badge pill variant="light">
          <h3>Choose your favorite number</h3>
        </Badge>
      </div>

      {isRedirect ? (
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
                  onClick={!isLoading ? sendVote : null}
                  disabled={isLoading}
                  value={num}
                >
                  {num}
                </Button>{" "}
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
  const { message } = state.votePage;
  return { message };
};

export default compose(connect(mapStateToProps, { putVote, setMessage }))(
  SendVote
);
