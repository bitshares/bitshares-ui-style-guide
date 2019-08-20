import React, {Component} from "react";
import {Tooltip as AntTooltip} from "antd";

class Tooltip extends Component {

    constructor(){
        super();
        this.defaultDelay = 0.5;
    }

    render() {
        return (
            <AntTooltip
                mouseEnterDelay={this.defaultDelay}
                {...this.props}
            >
                {this.props.children}
            </AntTooltip>
        );
    }
}

export default Tooltip;
