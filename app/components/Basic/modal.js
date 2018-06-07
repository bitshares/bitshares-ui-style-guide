import React from "react";

import bg from "assets/images/bitshares-screenshot-bg.png";
import lightBg from "assets/images/bitshares-screenshot-bg-light.png";

import {Modal as Mdl, BodyClassName} from "bitshares-ui-style-guide";

class Modal extends React.Component {

    render() {

        const style = {
            width : "150%",
            height: "150%",
        };

        let logo = bg;

        if (this.props.match.params.theme === "lightTheme")
            logo = lightBg;

        return (
            <BodyClassName className={this.props.match.params.theme}>
                <img src={logo} style={style}/>
                <Mdl title="Modal Example" visible={true}>
                    <p>The quick agile trader exchanged ZCASH for BTS</p>
                </Mdl>
            </BodyClassName>
        );
    }

}

export default Modal;
