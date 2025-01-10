import React from 'react';
import './index.css';
const Home = () => {
  return (
    <div>
      <header>
        <h1>Interactive Code Walkthroughs</h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#test-coverage">Test Coverage</a></li>
            <li><a href="#risk-analysis">Risk Analysis</a></li>
            <li><a href="#documentation">Documentation</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="features">
        <h2>Explore New Feature Code</h2>
        <p>Our tool allows you to interactively explore new feature code with annotations, test coverage, and risk analysis.</p>
        <button id="start-tour" onClick={() => alert('Starting the interactive code walkthrough!')}>Start Walkthrough</button>
      </section>

      <section id="code-walkthrough">
        <h2>Interactive Code Walkthrough</h2>
        <div id="code-blocks">
          <div className="code-block">
            <pre><code className="language-javascript">// Code section 1: Functionality implementation</code></pre>
            <p className="annotation">This code implements the core functionality for feature X...</p>
          </div>
          <div className="code-block">
            <pre><code className="language-javascript">// Code section 2: Error handling</code></pre>
            <p className="annotation">This handles errors and edge cases...</p>
          </div>
        </div>
        <button id="next-step" onClick={() => alert('Moving to the next code section')}>Next</button>
      </section>

      <section id="test-coverage">
        <h2>Test Coverage</h2>
        <div className="coverage-map">
          <p>Section 1: <span className="covered">Covered</span></p>
          <p>Section 2: <span className="not-covered">Not Covered</span></p>
        </div>
      </section>

      <section id="risk-analysis">
        <h2>Risk Analysis</h2>
        <div className="risk-alert">
          <p><strong>High Risk:</strong> Section 1 contains complex logic that may be prone to errors.</p>
          <span className="flagged">⚠️</span>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Interactive Code Walkthrough Tool | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
