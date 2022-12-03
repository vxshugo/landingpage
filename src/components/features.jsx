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
        <div className="container project-block">
            <Card
                img={t("projects.project-1.first.img")}
                title={t("projects.project-1.first.title")}
                budzhet={t("projects.project-1.first.budzhet")}
                country={t("projects.project-1.first.country")}
                count={t("projects.project-1.first.count")}
                otrasl={t("projects.project-1.first.otrasl")}
            />
            <Card
                img={t("projects.project-1.second.img")}
                title={t("projects.project-1.second.title")}
                budzhet={t("projects.project-1.second.budzhet")}
                country={t("projects.project-1.second.country")}
                count={t("projects.project-1.second.count")}
                otrasl={t("projects.project-1.second.otrasl")}
            />
            <Card
                img={t("projects.project-1.third.img")}
                title={t("projects.project-1.third.title")}
                budzhet={t("projects.project-1.third.budzhet")}
                country={t("projects.project-1.third.country")}
                count={t("projects.project-1.third.count")}
                otrasl={t("projects.project-1.third.otrasl")}
            />
        </div>
      </div>
    </div>
  )
}
