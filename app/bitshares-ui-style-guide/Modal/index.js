import React from 'react';
import {Modal as AntModal} from 'antd';

class Modal extends React.Component {

  render() {
    return (
      <AntModal {...this.props}/>
    );
  }

}

export default Modal;
