'use strict';

console.log('App is running...!');

// JSX - JavaScript XML (provided by react)
var template = React.createElement(
  'h1',
  null,
  'Indecision APP'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
