import Modal from "../modal/Modal";
import React from "react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Second = () => {
    const [modalActive, setModalActive] = useState(false)
    const {t} = useTranslation()
    return(
        <div className="block-about top-card-2" onClick={() => setModalActive(true)}>
            <div className="card-text">
                {t("projects.project-1.first.link2")}
            </div>
            <div className="toggle">
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="Caption__modal">
                    <h2 style={{textTransform: "none"}}>{t("projects.project-1.first.link2")}</h2>
                </div>
                <div className="text">
                    <h3>{t("projects.project-1.second.real.ul.title")}</h3>
                    <ul>
                        <li>{t("projects.project-1.second.real.ul.i1")}</li>
                        <li>{t("projects.project-1.second.real.ul.i2")}</li>
                        <li>{t("projects.project-1.second.real.ul.i3")}</li>
                    </ul>
                </div>

            </Modal>
        </div>
    )
}
export default Second