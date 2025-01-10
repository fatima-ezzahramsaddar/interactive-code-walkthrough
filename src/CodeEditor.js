import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

function CodeEditor({ code }) {
  return (
    <div>
      <h2>Code Walkthrough</h2>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeEditor;
