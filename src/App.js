import logo from './logo.svg';
import './App.css';
import WineDataVisualization from './WineDataVisualization';
import { useState } from 'react';
import BarChart  from './BarChart';

function App() {
  const [isScotterPlot, setIsScotterPlot]=useState(false)
  const [isBarchart, setIsBarchart]=useState(false)
  return (
    <div className="App">
      
      <button onClick={()=>{setIsBarchart(false);setIsScotterPlot(true)}} class="button-64"><span class="text">Scatter Plot</span></button>
      <button onClick={()=>{setIsBarchart(true);setIsScotterPlot(false)}}  class="button-36">Bar Chart</button>
      {isScotterPlot &&<WineDataVisualization/>}
      {isBarchart && <BarChart/>}
    </div>
  );
}

export default App;
