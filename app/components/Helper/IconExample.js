import React from "react";
import {Icon} from "antd";

class IconExample extends React.Component {

    render() {
        return (
            <div className="helper-icon-example">
                <Icon type={this.props.type}/>
            </div>
        );
    }

}

export default IconExample;
