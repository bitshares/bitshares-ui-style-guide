import React from "react";
import Basic from "../Basic";
import {BodyClassName} from "bitshares-ui-style-guide";

import "./styles.less";

class Dark extends React.Component {

    colorPalette = {
        "primary": [
            {color: "#00A9E9", style: {marginRight: "24px"}},
            {color: "#FFFFFF", textColor: "#000", style: {margin: "0 24px"}},
            {color: "#333333", style: {margin: "0 24px"}},
            {color: "#2A2A2A", style: {margin: "0 24px", borderWidth: "1px"}}
        ],
        "helper" : [
            {color: "#39B54A", style: {marginRight: "24px"}},
            {color: "#E6001F", style: {margin: "0 24px"}},
            {color: "#DDC512", style: {margin: "0 24px"}},
        ],
        "accent" : [
            {color: "#BABABA", style: {marginRight: "24px"}},
            {color: "#656565", style: {margin: "0 24px"}},
            {color: "#383838", style: {margin: "0 24px"}},
            {color: "#262626", style: {margin: "0 24px", borderWidth: "1px"}},
        ],
    };

    render() {
        return (
            <BodyClassName className="darkTheme">
                <Basic history={this.props.history} colorPalette={this.colorPalette} theme="darkTheme" themeName={"Dark"}/>
            </BodyClassName>
        );
    }

}

export default Dark;
