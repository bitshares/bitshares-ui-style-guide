import React from "react";

class Example extends React.Component {

    render() {
        return (
            <div className="helper-example" style={this.props.style || {}}>
                {this.props.label && (
                    <div className="helper-example-label">
                        {this.props.label}
                    </div>
                )}
                {this.props.content && (
                    <div className="helper-example-content">
                        {this.props.content}
                    </div>
                )}
            </div>
        );
    }

}

export default Example;
