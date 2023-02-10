import React from 'react';
import ReactECharts from 'echarts-for-react';
import Data from './Data.json'

const BarChart = () => {
  const option = {
    title: {
      text: 'Wine Data'
    },
    tooltip: {},
    legend: {
      data:['销量']
    },
    xAxis: {
      data:Data.wineData.map((data)=>data.Alcohol)
    },
    yAxis: {},
    series: [{
      name: 'malic acid',
      type: 'bar',
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