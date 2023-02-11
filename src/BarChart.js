import React from 'react';
import ReactECharts from 'echarts-for-react';
import Data from './Data.json'

//This component is for Bar Chart
const BarChart = () => {
  const option = {
    title: {
      text: 'Wine Data'
    },
    tooltip: {},
    legend: {
      data:[''] //Did nt taking legend data
    },
    xAxis: {
      //Here I am mapping the Alcohol Data from Json response
      data:Data.wineData.map((data)=>data.Alcohol)
    },
    yAxis: {},
    series: [{
      name: 'malic acid',
      type: 'bar',
      //Here I am mapping the Malic Acid Data from Json response
      data: Data.wineData.map((data)=>data['Malic Acid'])
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
    opts={{ renderer: 'svg' }}
  />;
};

export default BarChart;