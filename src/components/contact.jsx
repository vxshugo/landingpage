import {useTranslation} from "react-i18next";

export const Contact = (props) => {

  const {t} = useTranslation()
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <h3>{t("contact")}</h3>
          <div className="setting-contact">
            <a href="#" className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                050057, г. Алматы, ул.Сатапаева 62А
              </p>
            </a>
            <a href="callto:+77772117299" className='contact-item' style={{marginLeft: 15, marginRight: 20}}>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                +7 777 211 7299
              </p>
            </a>
            <a href="mailto:AlekseyN@inbox.ru" className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                AlekseyN@inbox.ru
              </p>
            </a>
          </div>
        </div>
      </div>
      {/*<div id='footer'>*/}
      {/*  <div className='container text-center'>*/}
      {/*    <p>*/}
      {/*      &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}*/}
      {/*      <a href='http://www.templatewire.com' rel='nofollow'>*/}
      {/*        TemplateWire*/}
      {/*      </a>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}
