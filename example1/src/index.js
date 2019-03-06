import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import * as serviceWorker from './serviceWorker';

const h1Style = {color: "red", backgroundColor: "blue"};
var element = React.createElement('h1', {style: h1Style} , 'Hello, world!');
//ReactDOM.render(element, document.getElementById('root'));
 ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
