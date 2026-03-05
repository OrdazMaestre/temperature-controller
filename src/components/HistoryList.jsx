import React from 'react'

function HistoryList({ history }) {
  return (
    <div className="history">
      <h3>Historial de cambios</h3>
      {history.length === 0 ? (
        <p>Aún no hay cambios</p>
      ) : (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoryList;