import React from "react";
import "antd/dist/antd.css";
import "./main.scss"
import {Link} from "react-router-dom";
import {Card} from "antd";

const Item = ({detailsOfItem}) => {

    const spliteUrl = (url) => {
        let splitedUrl = url.split('/');
        return splitedUrl[splitedUrl.length - 2];
    };

    return (
        <div className="rootCard">
            <Link to={`/main/${spliteUrl(detailsOfItem.url)}`}>
                <Card hoverable className="card" title={detailsOfItem.name}>
                    <div className="detailBlock">
                        <b>Gender:</b> {detailsOfItem.gender}
                    </div>
                </Card>
            </Link>
        </div>
    )
};
export default Item;
