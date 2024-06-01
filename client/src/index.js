// import React from 'react';
// import ReactDOM from 'react-dom'; // Correct import statement
// import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import statement for React 18
import './index.css';
import App from './App';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render
root.render(
 
    <App />
 
);
