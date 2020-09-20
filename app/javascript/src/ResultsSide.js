import React from 'react';

import LineGraph from "./LineGraph";

function ResultsSide(props) {

  const labels = [1, 2, 3, 4, 5, 6, 7, 8];
  const labelsSmall = [1, 3, 5, 7, 8];

  const yelling = {
    yelling: {
      label: "Yelling",
      data: [7, 6, 7, 5, 3, 5, 2, 1],
      fill: false,
      borderColor: "#6610f2"
    }
  };
  const yellingOptions = {
    title: { display: true, text: "Yelling" },
    scales: {
      xAxes: [{ scaleLabel: {display: true, labelString: "Session"} }],
      yAxes: [{ ticks: {maxTicksLimit: 4}, scaleLabel: {display: true, fontSize: 14, labelString: "Count"} }]
    }
  };

  const yellingSmall = {
    yelling: {
      label: "Yelling",
      data: [7, 7, 3, 2, 1],
      fill: false,
      borderColor: "#6610f2"
    }
  };
  const yellingOptionsSmall = {
    title: { display: true, text: "Yelling" },
    scales: {
      xAxes: [{ scaleLabel: {display: true, labelString: "Session"} }],
      yAxes: [{ ticks: {maxTicksLimit: 3, display: false} }]
    }
  };

  const aggression = {
    yelling: {
      label: "Aggression",
      data: [1, 0, 3, 0, 0, 1, 0, 0],
      fill: false,
      borderColor: "green"
    }
  };
  const aggressionOptions = {
    title: { display: true, text: "Aggression" },
    scales: {
      xAxes: [{ scaleLabel: {display: true, labelString: "Session"} }],
      yAxes: [{ ticks: {maxTicksLimit: 4}, scaleLabel: {display: true, fontSize: 14, labelString: "Duration (minutes)"} }]
    }
  };

  const aggressionSmall = {
    yelling: {
      label: "Aggression",
      data: [1, 3, 0, 0, 0],
      fill: false,
      borderColor: "green"
    }
  };
  const aggressionOptionsSmall = {
    title: { display: true, text: "Aggression" },
    scales: {
      xAxes: [{ scaleLabel: {display: true, labelString: "Session"} }],
      yAxes: [{ ticks: {maxTicksLimit: 3, display: false} }]
    }
  };

  const pica = {
    yelling: {
      label: "Pica",
      data: [5, 5, 1, 2, 3, 1, 0, 1],
      fill: false,
      borderColor: "DODGERBLUE"
    }
  };
  const picaOptions = {
    title: { display: true, text: "Pica" },
    scales: {
      xAxes: [{ scaleLabel: {display: true, labelString: "Session"} }],
      yAxes: [{ ticks: {maxTicksLimit: 4}, scaleLabel: {display: true, fontSize: 14, labelString: "Count"} }]
    }
  };

  const picaSmall = {
    yelling: {
      label: "Pica",
      data: [5, 1, 3, 0, 1],
      fill: false,
      borderColor: "DODGERBLUE"
    }
  };
  const picaOptionsSmall = {
    title: { display: true, text: "Pica" },
    scales: {
      xAxes: [{ scaleLabel: {display: true, labelString: "Session"} }],
      yAxes: [{ ticks: {maxTicksLimit: 3, display: false} }]
    }
  };

  const handSmall = {
    yelling: {
      label: "Pica",
      data: [0, 1, 0, 3, 5],
      fill: false,
      borderColor: "DODGERBLUE"
    }
  };
  const handOptionsSmall = {
    title: { display: true, text: "Raising Hand" },
    scales: {
      xAxes: [{ scaleLabel: {display: true, labelString: "Session"} }],
      yAxes: [{ ticks: {maxTicksLimit: 3, display: false} }]
    }
  };

  const waitSmall = {
    yelling: {
      label: "Pica",
      data: [3, 1, 7, 10, 20],
      fill: false,
      borderColor: "DODGERBLUE"
    }
  };
  const waitOptionsSmall = {
    title: { display: true, text: "Waiting" },
    scales: {
      xAxes: [{ scaleLabel: {display: true, labelString: "Session"} }],
      yAxes: [{ ticks: {maxTicksLimit: 3, display: false} }]
    }
  };

  return (
    <div className="mt-6">
      <div className="font-semibold text-xl mb-2">
        Treatment Plan Progress
      </div>

      <div className="font-semibold text-sm">
        Behaviors
      </div>

      <div className="flex flex-col">
        <LineGraph
          className=""
          data={yellingSmall}
          options={yellingOptionsSmall}
          labels={labelsSmall} />
        <LineGraph
          className=""
          data={aggressionSmall}
          options={aggressionOptionsSmall}
          labels={labelsSmall} />
        <LineGraph
          className=""
          data={picaSmall}
          options={picaOptionsSmall}
          labels={labelsSmall} />
      </div>

      <div className="font-semibold text-sm">
        Skills
      </div>

      <div className="flex flex-col">
        <LineGraph
          className=""
          data={handSmall}
          options={handOptionsSmall}
          labels={labelsSmall} />
        <LineGraph
          className=""
          data={waitSmall}
          options={waitOptionsSmall}
          labels={labelsSmall} />
      </div>

      <div className="flex flex-col hidden">
        <LineGraph
          className=""
          data={yelling}
          options={yellingOptions}
          labels={labels} />

        <LineGraph
          className=""
          data={aggression}
          options={aggressionOptions}
          labels={labels} />

        <LineGraph
          className=""
          data={pica}
          options={picaOptions}
          labels={labels} />
      </div>
    </div>
  );
}

export default ResultsSide;
