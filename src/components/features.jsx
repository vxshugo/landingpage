import {useTranslation} from "react-i18next";
import Card from "./Card";
import {useEffect, useState} from "react";

export const Features = (props) => {
    const {t, i18n} = useTranslation()

  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>{t("projects.title")}</h2>
        </div>
        <div className="container">
            <Card
                img={t("projects.project-1.first.img")}
                title={t("projects.project-1.first.title")}
                budzhet={t("projects.project-1.first.budzhet")}
                country={t("projects.project-1.first.country")}
                count={t("projects.project-1.first.count")}
                otrasl={t("projects.project-1.first.otrasl")}
            />
        </div>
      </div>
    </div>
  )
}
