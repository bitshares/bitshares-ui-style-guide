import React from "react";
import {Popover as AntPopover} from "antd";

class Popover extends React.Component {

    render() {
        return (
            <AntPopover {...this.props}/>
        );
    }

}

export default Popover;
