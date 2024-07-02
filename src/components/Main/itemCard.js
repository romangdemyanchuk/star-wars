import React from "react";
import {Card} from "antd";

const ItemCard = ({item, itemClick}) => {
    const {name, gender} = item
    return  <div className="rootCard">
            <Card
                hoverable
                className="card"
                title={name}
                onClick={() => itemClick(item)}
            >
                <b>Gender:</b> {gender}
            </Card>
        </div>
};
export default ItemCard;
