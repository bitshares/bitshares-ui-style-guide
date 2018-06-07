import React from "react";
import {Input as AntInput} from "antd";
import PropTypes from "prop-types";

class Input extends React.Component {

    static propTypes = {
        unsaved: PropTypes.bool,
    };

    render() {

        const props = {...this.props};

        delete props.unsaved;

        return (
            <AntInput {...props}/>
        );
    }

}

Input.Group = AntInput.Group;

export default Input;
