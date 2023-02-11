import React from 'react';
import ReactECharts from 'echarts-for-react';
import Data from './Data.json'

//This component is for Scatter Plot
const WineDataVisualization = () => {
  console.log(Data)

    
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
       //Here I am mapping the color intensity Data from Json response
      data: Data.wineData.map((data)=>data['Color intensity'])
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        //Here I am mapping the Hue Data from Json response
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