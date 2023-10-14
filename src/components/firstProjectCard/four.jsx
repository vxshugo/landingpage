import Modal from "../modal/Modal";
import React from "react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Four = () => {
    const [modalActive, setModalActive] = useState(false)
    const {t} = useTranslation()
    return(
        <div className="block-about top-card-1" onClick={() => setModalActive(true)}>
            <div className="card-text">
                {t("projects.project-1.first.link1-2")}
            </div>
            <div className="toggle">
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="Caption__modal">
                    <h2 style={{textTransform: "none"}}>{t("projects.project-1.first.link1-2")}</h2>
                </div>
                <table className="table">
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.first.inv.item.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.first.inv.item.l")}</td>
                    </tr>
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.first.inv.item1.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.first.inv.item1.l")}</td>
                    </tr>
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.first.inv.item2.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.first.inv.item2.l")}</td>
                    </tr>
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.first.inv.item3.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.first.inv.item3.l")}</td>
                    </tr>
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.first.inv.item4.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.first.inv.item4.l")}</td>
                    </tr>
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.first.inv.item5.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.first.inv.item5.l")}</td>
                    </tr>
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.first.inv.item6.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.first.inv.item6.l")}</td>
                    </tr>
                    <tr>
                        <td className="caption">
                            <div className="name">
                                {t("projects.project-1.first.inv.item7.i")}
                            </div>
                        </td>
                        <td className="value">{t("projects.project-1.first.inv.item7.l")}</td>
                    </tr>
                </table>
            </Modal>
        </div>
    )
}
export default Four