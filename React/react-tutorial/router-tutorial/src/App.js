import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
      <Route path="/" component={Home}  exact/>
      <Route path='/about' component={About}/>
    </div>
  );
}

export default App;
