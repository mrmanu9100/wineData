import React from 'react';
import ReactECharts from 'echarts-for-react';
import Data from './Data.json'

const WineDataVisualization = () => {
  console.log(Data)

    
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: Data.wineData.map((data)=>data['Color intensity'])
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: Data.wineData.map((data)=>data.Hue),
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
};

export default WineDataVisualization;