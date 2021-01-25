import React from "react";
import { ResponsivePie } from "@nivo/pie";
import config from "./config";
import style from "./chart.module.css";

const Pie = (props) => {
  const { data } = props;
  
  return (
    <div className={style.chart}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={config.defs}
        fill={config.fill}
        legends={config.legends}
      />
    </div>
  );
};
export default Pie;
