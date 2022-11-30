import {useTranslation} from "react-i18next";
import styled from 'styled-components';
import Card from "./Card";

export const Features = (props) => {
    const {t, i18n} = useTranslation()
    const Block = styled.div`
      width: 100%;
      margin-top: 35px;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
      align-items: stretch;
      min-height: 266px;
    `
    const Base = styled.div`
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `
    const Image = styled.div`
      width: 100%;
      height: 100%;
    `
    const Img = styled.img`
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    `
    const Top = styled.div`
        display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: stretch;
      align-items: stretch;
      flex: 1 1 auto;
      position: relative;
      z-index: 3;
    `
    const Left = styled.div`
      -webkit-box-flex: 0;
      flex: 0 0 auto;
      width: 266px;
      position: relative;
    `
    const Right = styled.div`
        padding: 24px 32px;
    `
    const LeftColumn = styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-between;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      align-content: stretch;
      align-items: stretch;
      width: 50%;
      padding-right: 32px;
    `
    const RightColumn = styled.div``
    const Caption = styled.div`
      margin-top: 12px;
      position: relative;
      font-weight: bold;
      font-size: 22px;
      line-height: 27px;
      color: #fff;
      text-align: left;
      padding-bottom: 32px;
      
      &::before{
        content: "";
        position: absolute;
        top: -12px;
        left: 0;
        width: 44px;
        height: 4px;
        background: #fff;
      }
    `
    const Place = styled.a`
        display: block;
      position: relative;
      padding-left: 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      text-decoration: underline;
      color: #fff;
      text-align: left;
      &::before{
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        width: 12px;
        height: 16px;
        background: url("https://www.investinregions.ru/bitrix/templates/iir/img/marker-white.svg") 0 0 no-repeat;
      }
    `

  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>{t("projects.title")}</h2>
        </div>
        <div className='row'>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </div>
  )
}
