import React from 'react';
import {Breadcrumb as AntBreadcrumb} from 'antd';

class Breadcrumb extends React.Component {

  render() {
    return (
      <AntBreadcrumb {...this.props}/>
    );
  }

}

Breadcrumb.Item = AntBreadcrumb.Item;

export default Breadcrumb;
