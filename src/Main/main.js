import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import "./main.scss"
import {getPeoples, SearchedItemsInfo} from "../api";
import Item from "./item";
import {Input, Spin} from "antd";

const Main = () => {
    const [allItems, setAllItems] = useState([])
    const [searchedItems, setSearchedItems] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
         getPeoples().then((item) => {
             setLoading(false)
             setAllItems(item.data.results)
         })
    }, [])

    const onSearchChange = (e) => {
        SearchedItemsInfo(e.target.value)
            .then(item => {
                setSearchedItems(item.data.results)
            })
    };

    const items = searchedItems ? searchedItems : allItems
    return <>
        { loading && <div className="loader"> <Spin size="large" /></div> }
        {!loading && <>
            <div>
                <Input
                    placeholder="search"
                    onChange={onSearchChange}
                    style={{ width: 200 }}
                    className="searchByName"

                />
            </div>
                {items.length === 0 && <div style={{textAlign: "center"}}>No!</div>}
            <div className="itemsWrapper">
                {
                    items.length > 0 && items.map(item =>{
                        return <Item detailsOfItem={item} key={item.url}/>
                    })
                }
            </div>
        </>
        }
    </>
};
export default Main;
