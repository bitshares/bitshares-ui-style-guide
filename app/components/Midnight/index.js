import React from "react";
import Basic from "../Basic/index";
import {BodyClassName} from "bitshares-ui-style-guide";

import "./styles.less";

class Midnight extends React.Component {

    colorPalette = {
        "primary": [
            {color: "#00A9E9", style: {marginRight: "24px"}},
            {color: "#FFFFFF", textColor: "#000", style: {margin: "0 24px"}},
            {color: "#2C2E37", style: {margin: "0 24px"}},
            {color: "#191A1F", style: {margin: "0 24px", borderWidth: "1px"}}
        ],
        "helper" : [
            {color: "#39B54A", style: {marginRight: "24px"}},
            {color: "#E6001F", style: {margin: "0 24px"}},
            {color: "#DDC512", style: {margin: "0 24px"}},
        ],
        "accent" : [
            {color: "#BABABA", style: {marginRight: "24px"}},
            {color: "#656565", style: {margin: "0 24px"}},
            {color: "#38393F", style: {margin: "0 24px"}},
            {color: "#121212", style: {margin: "0 24px", borderWidth: "1px"}},
        ],
    };

    render() {
        return (
            <BodyClassName className="midnightTheme">
                <Basic history={this.props.history} colorPalette={this.colorPalette} theme={"midnightTheme"} themeName={"midnight"}/>
            </BodyClassName>
        );
    }

}

export default Midnight;
