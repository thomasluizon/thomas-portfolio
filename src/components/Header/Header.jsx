import './css/header.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Lang from './Lang';

const Header = props => {
   const { t } = useTranslation();
   const [langMenu, setLangMenu] = useState(false);

   window.addEventListener('click', e => {
      if (e.target != document.querySelector('#lang')) {
         setLangMenu(false);
      }
   });

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
                  <i id="lang" className="bi bi-globe2"></i>
               </button>
               <Lang
                  style={langMenu ? '' : 'disappear'}
                  languages={props.languages}
               />
            </nav>
         </header>
      </div>
   );
};

export default Header;
