import React from "react";
import "antd/dist/antd.css";
import "./main.scss"
import Item from "./item";
import {Input, Spin} from "antd";

const Main = ({loading, onSearchChange, items, itemClick}) => {
    return <>
        { loading && <div className="loader"> <Spin size="large" /></div> }
        {!loading && <>
            <Input
                placeholder="search"
                onChange={onSearchChange}
                style={{ width: 200 }}
                className="searchByName"
            />
            {items?.length === 0 && <div style={{textAlign: "center"}}>No items!</div>}
            <div className="itemsWrapper">
                {
                    items?.length > 0 && items.map(item => {
                        return <Item item={item} itemClick={() => itemClick(item)} key={item.url}/>
                    })
                }
            </div>
        </>
        }
    </>
};
export default Main;
