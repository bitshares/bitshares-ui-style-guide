import React from "react";
import {InputNumber as AntInputNumber} from "antd";

class InputNumber extends React.Component {

    render() {
        return (
            <AntInputNumber {...this.props}/>
        );
    }

}

export default InputNumber;
