import React from "react";
import {Checkbox as AntCheckbox} from "antd";

class Checkbox extends React.Component {

    render() {
        return (
            <AntCheckbox {...this.props}/>
        );
    }

}

export default Checkbox;
