import './css/about.css';
import { useTranslation } from 'react-i18next';

const About = () => {
   const { t } = useTranslation();

   return (
      <section id="about">
         <div className="container">
            <div data-aos="slide-from-top" className="about__desc">
               <h3>{t('who_am_i')}</h3>
               <h2>{t('about_me')}</h2>
               <p>
                  <span>{t('desc_1')}</span>
                  <span>{t('desc_2')}</span>
                  <span>{t('desc_3')}</span>
               </p>
            </div>
            <div data-aos="slide-to-left" className="about__img">
               <img src="/assets/imgs/coding.gif" alt={t('gif')} />
            </div>
         </div>
      </section>
   );
};

export default About;
