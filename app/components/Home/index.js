import React from "react";
import {Link} from "react-router-dom";
import {BodyClassName} from "bitshares-ui-style-guide";
import {Button} from "antd";

import textLogo from "assets/images/bitshares-text-logo.png";
import "./styles.less";

class Home extends React.Component {

    state = {
        bodyClassName: "lightTheme"
    };

    constructor(props) {
        super(props);

        this.handleMouseOverDark = this.handleMouseOver.bind(this, "darkTheme");
        this.handleMouseOverMidnight = this.handleMouseOver.bind(this, "midnightTheme");
        this.handleMouseOverLight = this.handleMouseOver.bind(this, "lightTheme");
    }

    handleMouseOver(className) {
        this.setState({
            bodyClassName: className
        });
    }

    render() {

        return (
            <BodyClassName className={this.state.bodyClassName}>
                <div className="home">
                    <div className="home-container">
                        <div className="home-container-logo">
                            <img src={textLogo} alt="" style={{width: "300px"}}/>
                        </div>
                        <div className="home-container-links">
                            <Link to={"/dark"} onMouseEnter={this.handleMouseOverDark}>
                                <Button>Dark</Button>
                            </Link>
                            <Link to={"/light"} onMouseEnter={this.handleMouseOverLight}>
                                <Button>Light</Button>
                            </Link>
                            <Link to={"/midnight"} onMouseEnter={this.handleMouseOverMidnight}>
                                <Button>Midnight</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </BodyClassName>
        );
    }

}

export default Home;
