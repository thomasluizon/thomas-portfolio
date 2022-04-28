import { useTranslation } from 'react-i18next';

const Info = () => {
   const { t } = useTranslation();
   return (
      <ul data-aos="slide-from-top" className="contact__info">
         <li>
            <i className="bi bi-geo-alt-fill"></i>
            <p>{t('brasil')}, São Paulo, São Paulo</p>
         </li>
         <li>
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:thomaslrgregorio@gmail.com">
               thomaslrgregorio@gmail.com
            </a>
         </li>
         <li>
            <i className="bi bi-telephone-fill"></i>
            <a href="tel:+5511942670844">+5511942670844</a>
         </li>
      </ul>
   );
};

export default Info;
