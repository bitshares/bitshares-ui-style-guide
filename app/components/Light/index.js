import React from 'react';
import Basic from '../Basic/index';
import {BodyClassName} from 'bitshares-ui-style-guide';

import './styles.less';

class Light extends React.Component {

  render() {
    return (
      <BodyClassName className="lightTheme">
        <Basic />
      </BodyClassName>
    );
  }

}

export default Light;
