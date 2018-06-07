import React from "react";

class Color extends React.Component {

    render() {

        const style = {
            ...this.props.style || {},
        };

        if (this.props.color)
            style.backgroundColor = this.props.color;

        if (this.props.textColor) {
            style.color = this.props.textColor;
        }

        return (
            <div className={"helper-color"} style={style}>
                {this.props.color}
            </div>
        );
    }

}

export default Color;
