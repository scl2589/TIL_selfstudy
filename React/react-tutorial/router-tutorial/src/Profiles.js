import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

function Profiles(){
  return (
      <div>
          <h3>사용자 목록</h3>
          <ul>
              <li>
                <NavLink 
                    to="/profiles/lin"
                    activeStyle={{background: 'black', color: 'white'}}
                    // activeClassName="active"
                    // isActive={(match, location) => {
                    //     return true;
                    // }}
                >lin</NavLink></li>
              <li><Link to="/profiles/homer">homer</Link></li>
          </ul>

          <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요</div>} />
          <Route path="/profiles/:username" component={Profile}/>
          <WithRouterSample/>
      </div>
  )
}

export default Profiles;
