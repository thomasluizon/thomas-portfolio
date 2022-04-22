import './css/header.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Lang from './Lang';

const Header = props => {
   const { t } = useTranslation();
   const [langMenu, setLangMenu] = useState(false);
   const [drawer, setDrawer] = useState(false);

   window.addEventListener('click', e => {
      if (e.target != document.querySelector('#lang')) {
         setLangMenu(false);
      }
   });
   const sections = document.querySelectorAll('section');
   window.addEventListener('scroll', () => {
      const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
      sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.offsetHeight;
         const sectionId = section.getAttribute('id');

         const checkpointStart = checkpoint >= sectionTop;
         const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

         if (checkpointStart && checkpointEnd) {
            document
               .querySelector(`.header__nav__menu li a[href*='${sectionId}']`)
               .classList.add('active');
         } else {
            document
               .querySelector(`.header__nav__menu li a[href*='${sectionId}']`)
               .classList.remove('active');
         }
      });
   });

   return (
      <header className="header" data-aos="slide-down">
         <div className="container">
            <h1 className="header__title">Portfolio</h1>
            <nav className="header__nav">
               <ul className="header__nav__menu">
                  <li>
                     <a className="active" href="#home">
                        {t('nav-home')}
                     </a>
                  </li>
                  <li>
                     <a href="#about">{t('nav-about')}</a>
                  </li>
                  <li>
                     <a href="#projects">{t('nav-projects')}</a>
                  </li>
                  <li>
                     <a href="#contact">{t('nav-contact')}</a>
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
         </div>
      </header>
   );
};

export default Header;
