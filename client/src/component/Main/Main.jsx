import React, { useEffect, useState } from "react";
import PieContainer from "./Pie/PieContainer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDate } from "../../utils/getDate";
import { loadStatistic } from "../../store/vote/actions";
import { connect } from "react-redux";
import { compose } from "redux";
import style from "../../App.module.css";

const Main = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const date = getDate(startDate);
  useEffect(() => {
    props.loadStatistic(date);
  });

  return (
    <div className={style.main}>
      <PieContainer />
      <h3>Select Date</h3>

      <DatePicker
        minDate={new Date(2021, 0, 21)}
        maxDate={new Date()}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default compose(connect(null, { loadStatistic }))(Main);
