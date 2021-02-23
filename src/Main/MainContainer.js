import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import "./main.scss"
import {getDetail, getPeople, SearchedItemsInfo} from "../api";
import {spliteUrl} from "../helpers";
import DetailModal from "./detailModal/detailInfo";
import Main from "./main";

let currentPage = 1
const MainContainer = () => {
    const [people, setPeople] = useState([])
    const [searchedItems, setSearchedItems] = useState(null)
    const [loading, setLoading] = useState(false)
    const [itemInfo, setItemInfo] = useState({})
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [itemImg, setItemImg] = useState(null)

    useEffect(() => {
        const  handleScroll = () =>  {
            let scrollTop = document.documentElement.scrollTop
            let screenHeight = window.innerHeight
            let documentHeight = document.body.scrollHeight
            if (currentPage < 9) {
                if(scrollTop + screenHeight > documentHeight  - 50)  {
                    currentPage++
                    getPeople(currentPage).then((item) => {
                        setPeople(prevState => {
                            return prevState.concat(item.data.results);
                        })
                        setLoading(false)
                    })
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        setLoading(true)
        getPeople(currentPage).then((item) => {
            setLoading(false)
            setPeople(item.data.results)
        })
    }, [])

    const onSearchChange = (e) => {
        SearchedItemsInfo(e.target.value)
            .then(item => {
                setSearchedItems(item.data.results)
            })
    };

    const itemClick = (item) => {
        console.log(item)
        setModalIsOpen(true)
        let id=spliteUrl(item.url)
        setItemImg(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)
        getDetail(id).then((item) => {
            console.log(item.data)
            setItemInfo(item.data)
        })
    }

    const items = searchedItems ? searchedItems : people
    return <>
        <DetailModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} itemInfo={itemInfo} itemImg={itemImg}/>
        <Main loading={loading} onSearchChange={onSearchChange} items={items} itemClick={itemClick}/>
    </>
};
export default MainContainer;