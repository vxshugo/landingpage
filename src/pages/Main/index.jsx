import {Navigation} from "../../components/navigation";
import {Header} from "../../components/header";
import {Features} from "../../components/features";
import Form from "../../components/Form";
import {useTranslation} from "react-i18next";
import {Contact} from "../../components/contact";

const Main = () => {
    const {t} = useTranslation()
  return(
      <div>
          <Navigation/>
          <Header/>
          <Features/>
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

export default Main;