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
                <table className="table">
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.third.real.item.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.third.real.item.l")}</td>
                    </tr>
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.third.real.item1.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.third.real.item1.l")}</td>
                    </tr>
                </table>
                <div className="text">
                    <h3>{t("projects.project-1.third.real.ul.title")}</h3>
                    <ul>
                        <li>{t("projects.project-1.third.real.ul.i1")}</li>
                        <li>{t("projects.project-1.third.real.ul.i2")}</li>
                        <li>{t("projects.project-1.third.real.ul.i3")}</li>
                        <li>{t("projects.project-1.third.real.ul.i4")}</li>
                        <li>{t("projects.project-1.third.real.ul.i5")}</li>
                        <li>{t("projects.project-1.third.real.ul.i6")}</li>
                    </ul>
                </div>

            </Modal>
        </div>
    )
}
export default Second