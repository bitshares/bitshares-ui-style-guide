import React from 'react';
import Basic from '../Basic/index';
import {BodyClassName} from 'bitshares-ui-style-guide';

import './styles.less';

class Midnight extends React.Component {

  render() {
    return (
      <BodyClassName className="midnightTheme">
        <Basic />
      </BodyClassName>
    );
  }

}

export default Midnight;
