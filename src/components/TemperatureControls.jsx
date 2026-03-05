import React from 'react'
function TemperatureControls({ onIncrease, onDecrease, onReset }) {
  return (
    <div className="controls">
      <button onClick={onDecrease} className="btn minus">-</button>
      <button onClick={onReset} className="btn reset">Reset</button>
      <button onClick={onIncrease} className="btn plus">+</button>
    </div>
  );
}

export default TemperatureControls;