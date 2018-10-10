import React from "react";
import {Card as AntCard} from "antd";

class Card extends React.Component {

    render() {
        return (
            <AntCard {...this.props}/>
        );
    }

}

Card.Meta = AntCard.Meta;
Card.Grid = AntCard.Grid;

export default Card;
