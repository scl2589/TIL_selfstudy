import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles'
import HistorySample from './HistorySample';

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
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <Route path="/" component={Home}  exact/>
      <Route path='/about' component={About}/>
      <Route path='/profiles' component={Profiles} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
}

export default App;
