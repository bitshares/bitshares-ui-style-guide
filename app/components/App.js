import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './style.less';
import Dark from './Dark/index';
import Modal from './Basic/modal';

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
        <Route path='/modal' component={Modal} />
      </div>
    </Router>
  );
};

export default App;
