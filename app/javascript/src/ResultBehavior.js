import React from 'react';

import Chart from "react-google-charts";

function ResultBehavior(props) {
  return (
    <div className="flex flex-row">
      <div className="capitalize w-1/4">
        {props.name}
        <span className="font-semibold ml-2">{props.data.length}</span>
      </div>
      <div className="w-3/4">
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: 'string', id: 'President' },
            { type: 'date', id: 'Start' },
            { type: 'date', id: 'End' },
          ],
          ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
          ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
          ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
        ]}
        options={{
          showRowNumber: true,
        }}
        rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  );
}

export default ResultBehavior;
