import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Pie from "./Pie";

const PieContainer = (props) => {
  const color = {
    1: 318,
    2: 252,
    3: 202,
    4: 325,
    5: 172,
    6: 198,
    7: 130,
    8: 230,
    9: 330,
    0: 280,
  };
  const data = props.votes.map((num) => {
    return {
      id: `${num.number}`,
      label: `${num.number}`,
      value: num.count,
      color: `hsl(${color[num.number]}, 70%, 50%)`,
    };
  });
  return <Pie {...props} data={data} />;
};

let mapStateToProps = (state) => {
  const { votes } = state.votePage;
  return { votes };
};

export default compose(connect(mapStateToProps))(PieContainer);
