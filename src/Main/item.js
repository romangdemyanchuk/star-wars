import React from "react";
import "antd/dist/antd.css";
import "./main.scss"
import {Card} from "antd";

const Item = ({item, itemClick}) => {
    return  <div className="rootCard">
            <Card hoverable className="card" title={item.name} onClick={() => itemClick(item)}>
                <b>Gender:</b> {item.gender}
            </Card>
        </div>
};
export default Item;
