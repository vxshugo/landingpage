import Modal from "../modal/Modal";
import React from "react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Third = () => {
    const [modalActive, setModalActive] = useState(false)
    const {t} = useTranslation()
    return(
        <div className="block-about bottom-card-4" onClick={() => setModalActive(true)}>
            <div className="card-text">
                {t("projects.project-1.first.link4")}
            </div>
            <div className="toggle">
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="Caption__modal">
                    <h2 style={{textTransform: "none"}}>{t("projects.project-1.first.link4")}</h2>
                </div>
                <div className="text">
                    <h3>{t("projects.project-1.first.soc.item")}</h3>
                    <p>{t("projects.project-1.first.soc.item1")}</p>
                </div>
            </Modal>
        </div>
    )
}
export default Third