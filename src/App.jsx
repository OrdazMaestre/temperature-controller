import React from 'react'
import { useState } from 'react';
import TemperatureDisplay from './components/TemperatureDisplay';
import TemperatureControls from './components/TemperatureControls';
import HistoryList from './components/HistoryList';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState([]);

  const addToHistory = (newTemp) => {
    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    setHistory((prev) => [`[${time}] → ${newTemp} °C`, ...prev]);
  };

  const increase = () => {
    setTemperature((prev) => {
      const newTemp = prev + 1;
      addToHistory(newTemp);
      return newTemp;
    });
  };

  const decrease = () => {
    setTemperature((prev) => {
      const newTemp = prev - 1;
      addToHistory(newTemp);
      return newTemp;
    });
  };

  const reset = () => {
    setTemperature(20);
    setHistory([]);
  };

  return (
    <div className="app-container">
      <h1>Controlador de Temperatura</h1>
      
      <TemperatureDisplay temperature={temperature} />
      
      <TemperatureControls 
        onIncrease={increase} 
        onDecrease={decrease} 
        onReset={reset} 
      />
      
      <HistoryList history={history} />
    </div>
  );
}

export default App;