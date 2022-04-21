import './header.css';
import { useTranslation } from 'react-i18next';

const Header = props => {
   const { t } = useTranslation();

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
            </nav>
         </header>
      </div>
   );
};

export default Header;
