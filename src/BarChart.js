import React from 'react';
import ReactECharts from 'echarts-for-react';
import Data from './Data.json'

//This component is for Bar Chart
const BarChart = () => {
  const xAxisData = Data.wineData.map((data)=>data.Alcohol)
  //Here im filtering the Alcohol data and removing duplicates
  const alcoholData=[...new Set(xAxisData)]
  console.log()
  const option = {
    title: {
      text: 'Wine Data'
    },
    tooltip: {},
    legend: {
      data:[''] //Did n't taking legend data
    },
    xAxis: {
      //Here I am mapping the Alcohol Data from Json response
      data:alcoholData
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