import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Navigation} from "../../components/navigation";
import {Carousel} from "react-responsive-carousel";
import Form from "../../components/Form";
import styled from "styled-components";
import React from "react";
import First from "../../components/secondProjectCard/first";
import Second from "../../components/secondProjectCard/second";
import Thir from "../../components/secondProjectCard/thir";
import {Contact} from "../../components/contact";

const SecondProject = () => {
    const [show, setShow] = useState(false)
    const {t} = useTranslation()

    const toggle = () => {
        if (show == false){
            setShow(true);
        }else {
            setShow(false);
        }
        console.log(show)
    }
    return(
        <div className='text-center'>
            <Navigation/>
            <div style={{paddingBottom: 180}}></div>
            <div className="container">
                <h2 className="section-title resp line-top" style={{color: "#0D47A1",textAlign: "left"}}>{t("projects.project-1.second.title")}</h2>
                <div className="card card-price-more">
                    <div className="card-img-more">
                        <img src="https://www.investinregions.ru/upload/resize_cache/iblock/1bd/864_532_2/tomatoes_gbb28aa383_1920.jpg" className="img-responsive"/>
                    </div>
                    <div className="card-body" style={{textAlign: "left", padding: 10}}>
                        <div className="price">
                            <Adress>
                                {t("projects.project-1.second.country")}
                            </Adress>
                        </div>
                        <ul className="details" style={{paddingTop: 20,paddingBottom: 15}}>
                            <li style={{textTransform: "uppercase",fontWeight: "bold", fontSize: 18, lineHeight: "15px", color: "#2B2B2B"}}>{t("projects.sub1")}</li>
                            <li style={{color: "black",marginLeft: 10, marginTop: 10, fontWeight: 400, fontSize: 16, lineHeight: "20px", }}>- {t("projects.project-1.second.otrasl")}</li>
                        </ul>
                        <ul className="details" style={{paddingBottom: 15}}>
                            <li style={{textTransform: "uppercase", fontSize: 18, lineHeight: "15px", fontWeight: "bold",color: "#2B2B2B"}}>{t("projects.sub2")}</li>
                            <li style={{color: "black",marginLeft: 10, marginTop: 10, fontWeight: 400, fontSize: 16, lineHeight: "20px", }}>{t("projects.project-1.second.budzhet")} ₽</li>
                        </ul>
                        <ul className="details" style={{paddingBottom: 15}}>
                            <li style={{textTransform: "uppercase", fontSize: 18, lineHeight: "15px",fontWeight: "bold", color: "#2B2B2B"}}>{t("projects.sub3")}</li>
                            <li style={{color: "black",marginLeft: 10, marginTop: 10, fontWeight: 400, fontSize: 16, lineHeight: "20px", }}>{t("projects.project-1.second.count")} ₽</li>
                        </ul>
                        <ul className="details" style={{paddingBottom: 15}}>
                            <li style={{textTransform: "uppercase", fontSize: 18, lineHeight: "15px",fontWeight: "bold", color: "#2B2B2B"}}>{t("projects.Type")}</li>
                            <li style={{color: "black",marginLeft: 10, marginTop: 10, fontWeight: 400, fontSize: 16, lineHeight: "20px", }}>- {t("projects.project-1.second.type")}</li>
                        </ul>


                        <ul className="details" style={{paddingBottom: 15,paddingTop: 25}}>
                            <li style={{textTransform: "uppercase", fontSize: 18, lineHeight: "22px",fontWeight: "bold", color: "#2B2B2B"}}>{t("projects.sub5")}</li>
                            <li style={{color: "black",marginLeft: 10, marginTop: 10, fontWeight: 400, fontSize: 16, lineHeight: "20px", }}>- {t("projects.project-1.second.sub1")}</li>
                        </ul>
                    </div>
                </div>
                <div style={{paddingBottom: 50}}>
                    <h2 className="section-title resp" style={{color: "#0D47A1",textAlign: "left"}}>{t("projects.sub6")}</h2>
                    <div style={{textAlign: "left", color: "#000"}}>
                        <span style={{whiteSpace: "pre-line", fontSize: 18}}>{t("projects.project-1.second.desc")}</span>
                    </div>
                    <div className="buttons-card">
                        <First/>
                        <Second/>
                        <Thir/>
                    </div>
                    <div className="buttons-card">
                        <div className="block-about top-card-1" onClick={toggle}>
                            <div className="card-text">
                                {t("projects.project-1.first.link1")}
                            </div>
                            <div className="toggle">
                            </div>
                        </div>
                    </div>
                    { show == true ? <Form/> : <></>}
                </div>
            </div>
            <Contact/>
        </div>
    )
}
const Adress = styled.a`
  position: relative;
  padding-left: 20px;
  padding-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: underline;
  margin-bottom: 16px;
  color: #0D47A1;
  cursor: pointer;
  
  &::before{
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 12px;
    height: 16px;
    background: url("https://www.investinregions.ru/bitrix/templates/iir/img/marker-blue.svg");
  }
`

const Caption = styled.div`
  margin-top: 12px;
  position: relative;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  color: black;
`

export default SecondProject;