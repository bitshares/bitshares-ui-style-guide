import {Tooltip, Icon} from "antd";
import React from "react";

class BitsharesTooltip extends React.Component {
  state = {
    isMobile: false
  }

  componentDidMount(){
    if(window.innerWidth < this.props.mobileBreakpoint){
      this.setState({isMobile: true});
    }

    window.onresize = ()=>{
      if(window.innerWidth < this.props.mobileBreakpoint && !this.state.isMobile){
        this.setState({isMobile: true});
      } else if(window.innerWidth >= this.props.mobileBreakpoint && this.state.isMobile){
        this.setState({isMobile: false});
      }
    }
  }

  render(){
    let { props, state } = this;
    var { wrapperStyles, iconStyles } = props;
    let { isMobile } = state;
    let extraProps = {};

    if(isMobile){
      extraProps.trigger = "click";
      extraProps.placement = "topLeft";
    }

    wrapperStyles = Object.assign({
      position: "absolute",
      zIndex: "1",
      right: "5px",
      top: "5px"
    }, wrapperStyles || {});

    iconStyles = Object.assign({
      fontSize: "1.5em"
    }, iconStyles || {});

    return <div style={{position: "relative"}}>
      <div style={wrapperStyles}>
        <Tooltip {...props} {...extraProps}>
          <Icon type="question-circle" theme="outlined" style={iconStyles}/>
        </Tooltip>
      </div>
      {this.props.children}
    </div>
  }
}

BitsharesTooltip.defaultProps = {
  mobileBreakpoint: 760
}

export default BitsharesTooltip;
