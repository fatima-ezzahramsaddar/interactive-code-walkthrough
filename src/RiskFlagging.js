import React from 'react';

function RiskFlagging({ riskAreas }) {
  return (
    <div>
      <h3>Risk Flagging</h3>
      <ul>
        {riskAreas.map((risk, index) => (
          <li key={index}>
            <strong>{risk.area}:</strong> Risk Score: {risk.riskScore}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RiskFlagging;
