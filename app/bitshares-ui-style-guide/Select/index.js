import React from "react";
import {Select as AntSelect} from "antd";

class Select extends React.Component {

    render() {

        const props = {...this.props};

        return (
            <AntSelect {...props}/>
        );
    }

}

Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;

export default Select;
