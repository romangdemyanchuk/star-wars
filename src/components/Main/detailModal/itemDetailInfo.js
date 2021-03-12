import React from "react";
import {Modal} from "antd";
import './itemDetailInfo.scss'

export const DetailModal = ({ modalIsOpen, setModalIsOpen, itemInfo, itemImg }) => {
    const {name, gender, birth_year, eye_color, height, hair_color} = itemInfo
    return (
        <Modal
            style={{top: '120px'}}
            visible={modalIsOpen}
            onCancel={() => setModalIsOpen(false)}
        >
            <div className="itemDetailsWrapper">
                <img className="personImg" src={itemImg} alt="person"/>
                <div className="itemFields">
                    <div className="itemField">
                        <b>Name:</b> {name}
                    </div>
                    <div className="itemField">
                        <b>Gender:</b> {gender}
                    </div>
                    <div className="itemField">
                        <b>Birth year:</b> {birth_year}
                    </div>
                    <div className="itemField">
                        <b>Eye color:</b> {eye_color}
                    </div>
                    <div className="itemField">
                        <b>Height:</b> {height}
                    </div>
                    <div className="itemField">
                        <b>Hair color:</b> {hair_color}
                    </div>
                </div>
            </div>
        </Modal>
    )
};

export default DetailModal;
