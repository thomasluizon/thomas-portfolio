import { useTranslation } from 'react-i18next';
import Project from './Project';

const Projects = () => {
   const { t } = useTranslation();

   return (
      <section id="projects">
         <div className="container">
            <h2 className="projects__title" data-aos="slide-to-left">
               {t('my_projects')}
            </h2>
            <div className="projects__container">
               <Project
                  repo="https://github.com/thomasluizon/react-calculator"
                  demo="https://react-calculator-thomas.vercel.app/"
                  desc={t('calculator_desc')}
                  img="https://github.com/thomasluizon/react-calculator/raw/main/src/assets/Screenshot.png"
               />
               <Project
                  repo="https://github.com/thomasluizon/react-notes-app"
                  demo="https://react-notes-app-thomas.vercel.app/"
                  desc={t('notes_desc')}
                  img="https://github.com/thomasluizon/react-notes-app/raw/main/Screenshot.png"
               />
               <Project
                  repo="https://github.com/thomasluizon/ip-address-tracker-react"
                  demo="https://ip-address-tracker-react-thomas.vercel.app/"
                  desc={t('ipaddress_desc')}
                  img="https://github.com/thomasluizon/ip-address-tracker-react/blob/main/src/assets/ScreenshotMobile.png?raw=true"
               />
               <Project
                  repo="https://github.com/thomasluizon/url-shortening-api-react"
                  demo="https://url-shortening-api-react.vercel.app/"
                  desc={t('linkshortener_desc')}
                  img="https://github.com/thomasluizon/url-shortening-api-react/raw/main/src/assets/Screenshots/Screenshot_2-mobile.png"
               />
            </div>
         </div>
      </section>
   );
};

export default Projects;
