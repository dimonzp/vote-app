import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadLogs } from "../../store/logs/actions";
import { Alert } from "react-bootstrap";
import { getDate } from "../../utils/getDate";



const Logs = (props) => {
  useEffect(() => {
      
    props.loadLogs();
  }, []);

  return (
    <div>
      {props.logs.map((l) => {
          
        const date = `${getDate(new Date(l.date), true, true)} ${l.url} {${l.json}}`;
        return (
          <div>
              
            <Alert key={l._id} variant="primary">{date}</Alert>
          </div>
        );
      })}
    </div>
  );
};

let mapStateToProps = (state) => {
  const { logs } = state.logsPage;
  return { logs };
};

export default compose(connect(mapStateToProps, { loadLogs }))(Logs);
