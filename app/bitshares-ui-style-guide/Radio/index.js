import React from 'react';
import {Radio as AntRadio} from 'antd';

class Radio extends React.Component {

  render() {
    return (
      <AntRadio {...this.props}/>
    );
  }

}

Radio.Group = AntRadio.Group;

export default Radio;
