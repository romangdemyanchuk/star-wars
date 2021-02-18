import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import "./detail.scss"
import {getDetail} from "../api";
import {Card, Spin} from "antd";
import {Link} from "react-router-dom";

const Detail = (props) => {
    let id = props.match.params.id
    const [itemInfo, setItemsInfo] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getDetail(id).then((item) => {
            setLoading(false)
            setItemsInfo(item.data)
        })
    }, [])

    const imageItem = () => {
        return (`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`);
    }
    return  <>
        {!loading &&
        <Card
            hoverable
            className="card"
            extra={<Link to="/main" >Back</Link>}
            title={itemInfo.name}
            style={{ width: 200 }}
        >
            <img className="personImg" src={imageItem()}/>
            <div className="itemField">
                <b>Gender:</b> {itemInfo.gender}
            </div>
            <div className="itemField">
                <b>Birth year:</b> {itemInfo.birth_year}
            </div>
            <div className="itemField">
                <b>Eye color:</b> {itemInfo.eye_color}
            </div>
            <div className="itemField">
                <b>Height:</b> {itemInfo.height}
            </div>
            <div className="itemField">
                <b>Hair color:</b> {itemInfo.hair_color}
            </div>
        </Card>
        }
        {loading && <div className="loader"> <Spin size="large" /></div>}
    </>
};
export default Detail;
