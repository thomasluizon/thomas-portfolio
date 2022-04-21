import './css/header.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import i18next from 'i18next';

const Header = props => {
   const { t } = useTranslation();
   const [langMenu, setLangMenu] = useState(false);

   const Lang = props => {
      return (
         <ul className="header__nav__lang-menu">
            {props.languages.map(lang => (
               <li key={lang.country_code}>
                  <button onClick={() => i18next.changeLanguage(lang.code)}>
                     <span
                        className={`flag-icon flag-icon-${lang.country_code}`}
                     ></span>
                     {lang.name}
                  </button>
               </li>
            ))}
         </ul>
      );
   };

   return (
      <div className="container">
         <header className="header">
            <h1 className="header__title">Portfolio</h1>
            <nav className="header__nav">
               <ul className="header__nav__menu">
                  <li>
                     <a>{t('nav-home')}</a>
                  </li>
                  <li>
                     <a>{t('nav-about')}</a>
                  </li>
                  <li>
                     <a>{t('nav-projects')}</a>
                  </li>
                  <li>
                     <a>{t('nav-contact')}</a>
                  </li>
               </ul>
               <button
                  onClick={() => setLangMenu(!langMenu)}
                  className="header__nav__lang-btn"
               >
                  <i className="bi bi-globe2"></i>
               </button>
               {langMenu && <Lang languages={props.languages} />}
            </nav>
         </header>
      </div>
   );
};

export default Header;
