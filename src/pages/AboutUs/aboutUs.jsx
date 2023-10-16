import {Navigation} from "../../components/navigation";
import {useTranslation} from "react-i18next";
import {Contact} from "../../components/contact";
import Form from "../../components/Form";

const AboutUs = () => {
    const {t} = useTranslation()

  return(
      <div>
          <Navigation/>
          <div className="text-center" style={{paddingTop: 150, paddingBottom: 100}}>
              <div className="container" >
                  <div className='section-title' style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                      <h2>
                          {t("about.title")}
                      </h2>
                      <h3>
                          {t("about.title2")}
                      </h3>
                  </div>
                  <div  style={{textAlign: "left", color: "#000", width: "100%",listStyle: "square outside"}}>
                      <p>
                          <strong>{t("about.text1.strong")}</strong>
                          {t("about.text1.text")}
                      </p>
                      <ul style={{listStyle: "circle outside", marginLeft: 20}}>
                          <li>{t("about.ul1.item")}</li>
                          <li>{t("about.ul1.item2")}</li>
                      </ul>
                      <p style={{paddingTop: 10}}>
                          <strong>{t("about.text2.strong")}</strong>, {t("about.text2.text")}
                      </p>
                      <ul style={{listStyle: "circle outside", marginLeft: 20}}>
                          <li>{t("about.ul2.item")}</li>
                          <li>{t("about.ul2.item2")}</li>
                          <li>{t("about.ul2.item3")}</li>
                      </ul>
                      <p><strong>{t("about.text3")}</strong></p>
                      <ul style={{listStyle: "circle outside", marginLeft: 20}}>
                          <li>{t("about.ul3.item")}</li>
                          <li>{t("about.ul3.item2")}</li>
                          <li>{t("about.ul3.item3")}</li>
                          <li>{t("about.ul3.item4")}</li>
                          <li>{t("about.ul3.item5")}</li>
                          <li>{t("about.ul3.item6")}</li>
                          <li>{t("about.ul3.item7")}</li>
                          <li>{t("about.ul3.item8")}</li>
                          <li>{t("about.ul3.item9")}</li>
                      </ul>
                      <p style={{paddingTop: 10}}>
                          <strong>{t("about.text4.strong")}</strong>{t("about.text4.text")}
                      </p>
                      <p>
                          <strong>{t("about.text5.strong")}</strong>{t("about.text5.text")}
                      </p>
                      <p>
                          <strong>{t("about.text6.strong")}</strong>
                      </p>
                      <ol style={{marginLeft: 20}}>
                          <li>
                              {t("about.text6.ol.li")}
                          </li>
                          <li>
                              {t("about.text6.ol.li2")}
                          </li>
                          <li>
                              {t("about.text6.ol.li3")}
                          </li>
                          <li>
                              {t("about.text6.ol.li4")}
                          </li>
                      </ol>
                      <p style={{paddingTop: 10}}>
                          <strong>{t("about.text7.strong")}</strong>{t("about.text7.text")}
                      </p>
                      <p>
                          <strong>{t("about.text8.strong")}</strong>{t("about.text8.text")}
                      </p>
                      <p style={{paddingTop: 10}}>
                          <strong>{t("about.ul4.strong")}</strong>
                      </p>
                      <ul style={{listStyle: "circle outside", marginLeft: 20}}>
                          <li>{t("about.ul4.li1")}</li>
                          <li>{t("about.ul4.li2")}</li>
                          <li>{t("about.ul4.li3")}</li>
                          <li>{t("about.ul4.li4")}</li>
                          <li>{t("about.ul4.li5")}</li>
                          <li>{t("about.ul4.li6")}</li>
                          <li>{t("about.ul4.li7")}</li>
                          <li>{t("about.ul4.li8")}</li>
                          <li>{t("about.ul4.li9")} </li>
                          <li>{t("about.ul4.li10")}</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div id="podatzayavku" className="text-center">
              <div className="container" style={{display: "flex", flexDirection: "column"}}>
                  <div className="col-md-10 col-md-offset-1 section-title">
                      <h2>{t("navigation.navlinks.part3")}</h2>
                  </div>
                  <div style={{display: "flex",justifyContent: "center", alignItems: "center"}}>
                      <Form/>
                  </div>
              </div>
          </div>
          <Contact/>
      </div>
  )
}

export default AboutUs