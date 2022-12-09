import React from "react";
import {useTranslation} from "react-i18next";
import "../i18next";
import {Link} from "react-router-dom";

export const Navigation = (props) => {

  const {t, i18n} = useTranslation()

  const changleLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }


  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='page-scroll' href='#page-top'>
            <Link to={"/"}>
              <img width={100} src="img/logo.png" alt=""/>
            </Link>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <div style={{marginTop:15}} className="dropdown nav navbar-nav navbar-right">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="true">
              {t("navigation.navlinks.language")}
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a onClick={() => changleLanguage('en')} href="#">English</a></li>
              <li><a onClick={() => changleLanguage('ru')} href="#">Руссий</a></li>
              <li><a onClick={() => changleLanguage('ch')} href="#">China</a></li>
              <li><a onClick={() => changleLanguage('fr')} href="#">French</a></li>
            </ul>
          </div>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                {t("navigation.navlinks.part1")}
              </a>
            </li>
            <li>
              <Link to={"/about"} >
                {t("navigation.navlinks.part2")}
              </Link>
            </li>
            <li>
              <a href='#podatzayavku' className='page-scroll'>
                {t("navigation.navlinks.part3")}
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                {t("navigation.navlinks.part4")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
