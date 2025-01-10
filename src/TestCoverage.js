import React from 'react';

function TestCoverage({ coverage }) {
  return (
    <div>
      <h3>Test Coverage</h3>
      <p>Tested Code: {coverage.tested.join(', ')}</p>
      <p>Untested Code: {coverage.untested.join(', ')}</p>
    </div>
  );
}

export default TestCoverage;
