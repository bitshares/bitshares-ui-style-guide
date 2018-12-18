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
    let { withQuestionIcon } = props;
    let { isMobile } = state;
    let extraProps = {};

    if(isMobile){
      extraProps.trigger = "click";
      extraProps.placement = "topLeft";
    }

    return withQuestionIcon ? <div style={{position: "relative"}}>
      <div style={{position: "absolute", zIndex: "1", right: "5px", top: "5px"}}>
        <Tooltip {...props} {...extraProps}>
          <Icon type="question-circle" theme="outlined" style={{fontSize: "1.5em"}}/>
        </Tooltip>
      </div>
      {this.props.children}
    </div> : <Tooltip {...props} {...extraProps} />
  }
}

BitsharesTooltip.defaultProps = {
  mobileBreakpoint: 760
}

export default BitsharesTooltip;
