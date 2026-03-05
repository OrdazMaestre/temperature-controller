import React from 'react'
function TemperatureDisplay({ temperature }) {
  let message = '';
  let className = 'message';

  if (temperature < 15) {
    message = '¡Hace frío!';
    className += ' cold';
  } else if (temperature <= 25) {
    message = 'Temperatura agradable';
    className += ' pleasant';
  } else {
    message = '¡Hace calor!';
    className += ' hot';
  }

  return (
    <div className="display">
      <h2>{temperature} °C</h2>
      <p className={className}>{message}</p>
    </div>
  );
}

export default TemperatureDisplay;