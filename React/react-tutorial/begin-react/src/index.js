import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';

// ReactDOM은 페이지에서 getElementById - ID가 root인 것을 찾아서 넣겠다 라는 뜻이다.
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Hello name="Lin" isSpecial="true"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
