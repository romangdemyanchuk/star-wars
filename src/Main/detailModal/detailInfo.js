import React from "react";
import {Modal} from "antd";
import './detailInfo.scss'

export const DetailModal = ({ modalIsOpen, setModalIsOpen, itemInfo, itemImg }) => {
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
                        <b>Name:</b> {itemInfo.name}
                    </div>
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
                </div>
            </div>
        </Modal>
    )
};

export default DetailModal;
