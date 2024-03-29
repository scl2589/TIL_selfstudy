import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
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
      {/* Not found 페이지를 보여줄 때 Switch를 사용하면 유용하다. */}
      <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path='/about' component={About}/>
        <Route path='/profiles' component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route render={({ location }) => <div>
          <h2>이 페이지는 존재하지 않습니다.</h2>
          <p>{ location.pathname }</p>
          </div>} />
      </Switch>
    </div>
  );
}

export default App;
