import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './components/HelloWorld';
import HelloStudent from './components/HelloStudent';
import HelloWarren from './components/HelloWarren';

ReactDOM.render(
  <React.StrictMode>
    <h1>React Git Branch Merge Practice</h1>
    <HelloWorld />
    <HelloStudent name="Eboka" />
    <HelloStudent name="Atinder" />
    <HelloWarren />
  </React.StrictMode>,
  document.getElementById('root')
);
