import React from "react";
import PropTypes from "prop-types";

class BodyClassName extends React.Component {

    static propTypes = {
        className: PropTypes.string,
    };

    _getList(className) {
        return className.length ? className.split(" ") : [];
    }

    componentDidMount() {
        this._getList(this.props.className).forEach((className) => {
            if (!document.body.classList.contains(className)) {
                document.body.classList.add(className);
            }
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

        const currentClassName = this._getList(this.props.className);
        const nextClassName = this._getList(nextProps.className);


        currentClassName.forEach((className) => {
            if (nextClassName.indexOf(className) === -1)
                document.body.classList.remove(className);
        });

        nextClassName.forEach((className) => {
            if (!document.body.classList.contains(className)) {
                document.body.classList.add(className);
            }
        });
    }

    componentWillUnmount() {
        this._getList(this.props.className).forEach((className) => {
            document.body.classList.remove(className);
        });
    }

    render() {
        return this.props.children;
    }

}

export default BodyClassName;
