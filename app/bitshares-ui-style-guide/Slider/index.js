import React from 'react';
import {Slider as AntSlider} from 'antd';

class Slider extends React.Component {

  render() {
    return (
      <AntSlider {...this.props}/>
    );
  }

}

export default Slider;
