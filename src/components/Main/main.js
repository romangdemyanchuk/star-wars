import React from "react";
import ItemCard from "./itemCard";
import {Input, Spin} from "antd";
import "./main.scss"

const Main = ({loading, onSearchChange, items, itemClick}) => {
    return <>
        {
            loading
                ?
                <div className="loader"><Spin size="large"/></div>
                :
                <>
                    <Input
                        placeholder="search"
                        onChange={onSearchChange}
                        style={{width: 200}}
                        className="searchByName"
                    />
                    {items?.length === 0 &&
                    <div style={{textAlign: "center"}}>No items!</div>}
                    <div className="itemsWrapper">
                        {
                            items?.length > 0 && items.map(item => {
                                return <ItemCard
                                    item={item}
                                    itemClick={() => itemClick(item)}
                                    key={item.url}
                                />
                            })
                        }
                    </div>
                </>
        }
    </>
};
export default Main;
