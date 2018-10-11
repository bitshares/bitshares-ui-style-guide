import React from "react";
import {Alert as AntAlert} from "antd";

class Alert extends React.Component {

    render() {
        return (
            <AntAlert {...this.props}/>
        );
    }

}

Alert.Group = AntAlert.Group;

export default Alert;
