import React from 'react';
import {Table as AntTable} from 'antd';

class Table extends React.Component {

  render() {
    return (
      <AntTable {...this.props}/>
    );
  }

}

export default Table;
