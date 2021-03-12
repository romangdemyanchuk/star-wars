import React, {useEffect, useState} from "react";
import {getDetailOfPerson, getPeople, searchedPeopleInfo} from "../../api";
import {infoAction, spliteUrl} from "../../helpers/helpers";
import DetailModal from "./detailModal/itemDetailInfo";
import debounce from 'lodash.debounce';
import Main from "./main";
import {useHistory} from "react-router-dom";
import "./main.scss"

const MainContainer = () => {
    const [people, setPeople] = useState([])
    const [searchedItems, setSearchedItems] = useState(null)
    const [loading, setLoading] = useState(false)
    const [itemInfo, setItemInfo] = useState({})
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemImg, setItemImg] = useState(null)
    const history = useHistory()

    useEffect(() => {
        let isAuth = localStorage.getItem('isAuth');
        !isAuth && history.push('/')
        setLoading(true)
        getPeople(currentPage)
            .then((item) => {
                setLoading(false)
                setPeople(item.data.results)
            })
            .catch(() => {
                infoAction("Something is wrong");
            })
    }, [])

    useEffect(() => {
        currentPage > 1 && currentPage <= 9 && (
            getPeople(currentPage)
                .then((item) => {
                    setPeople(prevState => {
                        return prevState.concat(item.data.results);
                    })
                })
                .catch(() => {
                    infoAction("Something is wrong");
                })
        )
    }, [currentPage])

    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = document.documentElement.scrollTop
            let screenHeight = window.innerHeight
            let documentHeight = document.body.scrollHeight
            if (scrollTop + screenHeight > documentHeight - 100) {
                setCurrentPage(prevState => {
                    return ++prevState
                })
            }
        };
        const debouncedSave = debounce(() => handleScroll(), 500);
        window.addEventListener('scroll', debouncedSave);
    }, [])

    const onSearchChange = (e) => {
        searchedPeopleInfo(e.target.value)
            .then(item => {
                setSearchedItems(item.data.results)
                !e.target.value && setSearchedItems(null)
            })
            .catch(() => {
                infoAction("Something is wrong");
            })
    };

    const itemClick = (item) => {
        setModalIsOpen(true)
        let id = spliteUrl(item.url)
        setItemImg(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)
        getDetailOfPerson(id)
            .then((item) => {
                setItemInfo(item.data)
            })
            .catch(() => {
                infoAction("Something is wrong");
            })
    }

    const items = searchedItems ? searchedItems : people
    return <>
        <DetailModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            itemInfo={itemInfo}
            itemImg={itemImg}
        />
        <Main
            loading={loading}
            onSearchChange={onSearchChange}
            items={items}
            itemClick={itemClick}
        />
    </>
};
export default MainContainer;
