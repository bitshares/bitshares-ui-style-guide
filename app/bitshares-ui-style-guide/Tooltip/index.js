import React from "react";
import {Tooltip as AntTooltip} from "antd";

class Tooltip extends React.Component {

    render() {
        return (
            <AntTooltip {...this.props}/>
        );
    }

}

export default Tooltip;
