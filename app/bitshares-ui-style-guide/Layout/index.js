import React from 'react';
import {Layout as AntLayout} from 'antd';

class Layout extends React.Component {

  render() {
    return (
      <AntLayout {...this.props}/>
    );
  }

}

Layout.Header = AntLayout.Header;
Layout.Footer = AntLayout.Footer;
Layout.Sider = AntLayout.Sider;
Layout.Content = AntLayout.Content;

export default Layout;
