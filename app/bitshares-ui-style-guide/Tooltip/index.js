import React, {Component} from "react";
import {Tooltip as AntTooltip} from "antd";

class Tooltip extends Component {

    constructor(){
        super();
        this.defaultDelay = 0.5;
    }

    render() {
        let {mouseEnterDelay, ...remaining} = this.props;
        if (mouseEnterDelay == undefined) {
            mouseEnterDelay = this.defaultDelay;
        }
        return (
            <AntTooltip
                mouseEnterDelay={mouseEnterDelay}
                {...remaining}
            >
                {this.props.children}
            </AntTooltip>
        );
    }
}

export default Tooltip;
