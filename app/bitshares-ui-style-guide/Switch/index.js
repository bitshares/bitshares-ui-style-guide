import React from "react";
import {Switch as AntSwitch} from "antd";

class Switch extends React.Component {

    render() {
        return (
            <AntSwitch {...this.props}/>
        );
    }

}

Switch.Group = AntSwitch.Group;

export default Switch;
