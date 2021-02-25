import React from "react";
import "antd/dist/antd.css";
import "./main.scss"
import {Card} from "antd";

const Item = ({item, itemClick}) => {
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
export default Item;
