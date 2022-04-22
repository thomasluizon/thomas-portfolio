import './css/projects.css';
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
            </div>
         </div>
      </section>
   );
};

export default Projects;
