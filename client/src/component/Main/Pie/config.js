export default {
  
  defs: [
    {
      id: "dots",
      type: "patternDots",
      background: "inherit",
      color: "rgba(255, 255, 255, 0.3)",
      size: 4,
      padding: 1,
      stagger: true,
    },
    {
      id: "lines",
      type: "patternLines",
      background: "inherit",
      color: "rgba(255, 255, 255, 0.3)",
      rotation: -45,
      lineWidth: 6,
      spacing: 10,
    },
  ],
  fill: [
    {
      match: {
        id: "1",
      },
      id: "1",
    },
    {
      match: {
        id: "2",
      },
      id: "2",
    },
    {
      match: {
        id: "3",
      },
      id: "3",
    },
    {
      match: {
        id: "4",
      },
      id: "dots",
    },
    {
      match: {
        id: "5",
      },
      id: "dots",
    },
    {
      match: {
        id: "6",
      },
      id: "lines",
    },
    {
      match: {
        id: "7",
      },
      id: "lines",
    },
    {
      match: {
        id: "8",
      },
      id: "lines",
    },
    {
      match: {
        id: "9",
      },
      id: "lines",
    },
    {
      match: {
        id: "0",
      },
      id: "lines",
    },
  ],

  legends: [
    {
      anchor: "bottom",
      direction: "row",
      justify: false,
      translateX: 0,
      translateY: 56,
      itemsSpacing: 0,
      itemWidth: 40,
      itemHeight: 18,
      itemTextColor: "#999",
      itemDirection: "left-to-right",
      itemOpacity: 1,
      symbolSize: 18,
      symbolShape: "circle",
      effects: [
        {
          on: "hover",
          style: {
            itemTextColor: "#000",
          },
        },
      ],
    },
  ],
};
