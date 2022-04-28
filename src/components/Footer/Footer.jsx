import { useTranslation } from 'react-i18next';

const Footer = () => {
   const { t } = useTranslation();
   const year = new Date().getFullYear();

   return (
      <footer className="footer">
         <div className="container">
            <p>
               © Copyright {year}. {t('copyright')}
            </p>
            <ul className="footer_socials">
               <li>
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/thomas-luizon/"
                  >
                     <i className="bi bi-linkedin"></i>
                  </a>
               </li>
               <li>
                  <a target="_blank" href="https://github.com/thomasluizon">
                     <i className="bi bi-github"></i>
                  </a>
               </li>
               <li>
                  <a target="_blank" href="https://wa.me/5511942670844">
                     <i className="bi bi-whatsapp"></i>
                  </a>
               </li>
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
