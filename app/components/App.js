import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Dark from './Dark/index';
import './style.less';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' exact component={() => (
          <div>
            Bitshares StyleGuide
            <Link to={'/dark'}>Dark</Link>
            <Link to={'/link'}>Light</Link>
            <Link to={'/midnight'}>Midnight</Link>
          </div>
        )}>
        </Route>
        <Route path='/dark' component={Dark} />
      </div>
    </Router>
  );
};

export default App;
