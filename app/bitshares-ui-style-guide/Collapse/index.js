import React from "react";
import {Collapse as AntCollapse} from "antd";

class Collapse extends React.Component {

    render() {
        return (
            <AntCollapse {...this.props}/>
        );
    }

}

Collapse.Panel = AntCollapse.Panel;

export default Collapse;
