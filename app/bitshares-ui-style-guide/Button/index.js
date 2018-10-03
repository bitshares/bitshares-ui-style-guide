import React from "react";
import {Button as AntButton} from "antd";

class Button extends React.Component {

    render() {
        return (
            <AntButton {...this.props}/>
        );
    }

}

Button.Group = AntButton.Group;

export default Button;
