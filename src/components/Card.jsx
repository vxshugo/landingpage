import {useTranslation} from "react-i18next";
import styled from 'styled-components';

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
const Button = styled.a`
  width: 100%;
  text-decoration: none;
  border: 1px solid #0D47A1;
  background: #0D47A1;
  padding: 6px 16px 7px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: white;
`

const Card = ({img,country, title, otrasl, budzhet, count}) => {

    const {t, i18n} = useTranslation()

  return(
      <div className="card card-price">
          <div className="card-img" style={{width: "100%"}}>
              <div>
                      <img src={img}className="img-responsive"/>
              </div>
          </div>
          <div className="card-body" style={{textAlign: "left", padding: 10}}>
              <div className="price">
                  <Adress>
                      {country}
                  </Adress>
              </div>
              <div className="lead">
                  <Caption>
                      {title}
                  </Caption>
              </div>
              <ul className="details" style={{paddingBottom: 15}}>
                  <li style={{textTransform: "uppercase", fontSize: 12, lineHeight: "15px", color: "#999999"}}>{t("projects.sub1")}</li>
                  <li style={{color: "black", marginTop: 4, fontWeight: 400, fontSize: 16, lineHeight: "20px", }}>{otrasl}</li>
              </ul>
              <ul className="details" style={{paddingBottom: 15}}>
                  <li style={{textTransform: "uppercase", fontSize: 12, lineHeight: "15px", color: "#999999"}}>{t("projects.sub2")}</li>
                  <li style={{color: "black", marginTop: 4, fontWeight: 400, fontSize: 16, lineHeight: "20px", }}>{budzhet} ₽</li>
              </ul>
              <ul className="details" style={{paddingBottom: 15}}>
                  <li style={{textTransform: "uppercase", fontSize: 12, lineHeight: "15px", color: "#999999"}}>{t("projects.sub3")}</li>
                  <li style={{color: "black", marginTop: 4, fontWeight: 400, fontSize: 16, lineHeight: "20px", }}>{count} ₽</li>
              </ul>

              <div style={{paddingBottom: 20}}>
                  <Button href="#">
                      {t("projects.sub4")}
                  </Button>
              </div>
          </div>
      </div>
  )
}

export default Card