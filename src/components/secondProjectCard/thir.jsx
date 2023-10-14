import Modal from "../modal/Modal";
import React from "react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Thir = () => {
  const [modalActive, setModalActive] = useState(false)
  const {t} = useTranslation()
  return(
      <div className="block-about bottom-card-3" onClick={() => setModalActive(true)}>
        <div className="card-text">
          {t("projects.project-1.first.link3")}
        </div>
        <div className="toggle">
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <div className="Caption__modal">
            <h2 style={{textTransform: "none"}}>{t("projects.project-1.first.link3")}</h2>
          </div>
          <div className="text">
            <h3>{t("projects.project-1.second.ops.item1")}</h3>
            <p>{t("projects.project-1.second.ops.item2")}</p>
          </div>
        </Modal>
      </div>
  )
}
export default Thir