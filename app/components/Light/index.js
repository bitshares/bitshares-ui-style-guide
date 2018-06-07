import React from "react";
import Basic from "../Basic/index";
import {BodyClassName} from "bitshares-ui-style-guide";

import "./styles.less";

class Light extends React.Component {

    colorPalette = {
        "primary": [
            {color: "#00A9E9", textColor: "#fff", style: {marginRight: "24px"}},
            {color: "#FFFFFF", textColor: "#000", style: {margin: "0 24px", borderWidth: "1px"}},
            {color: "#333333", textColor: "#fff", style: {margin: "0 24px"}},
        ],
        "helper" : [
            {color: "#39B54A", textColor: "#fff", style: {marginRight: "24px"}},
            {color: "#E6001F", textColor: "#fff", style: {margin: "0 24px"}},
            {color: "#DDC512", textColor: "#fff", style: {margin: "0 24px"}},
        ],
        "accent" : [
            {color: "#EEEEEE", style: {marginRight: "24px"}},
            {color: "#CCCCCC", textColor: "#fff", style: {margin: "0 24px"}},
            {color: "#999999", textColor: "#fff", style: {margin: "0 24px"}},
            {color: "#656565", textColor: "#fff", style: {margin: "0 24px"}},
        ],
    };

    render() {
        return (
            <BodyClassName className="lightTheme">
                <Basic history={this.props.history} theme="lightTheme" colorPalette={this.colorPalette} themeName={"Light"}/>
            </BodyClassName>
        );
    }

}

export default Light;
