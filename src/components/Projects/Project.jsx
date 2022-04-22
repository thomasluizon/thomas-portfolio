import './css/projects.css';
import { useTranslation } from 'react-i18next';

const Project = props => {
   const { t } = useTranslation();

   return (
      <div data-aos="slide-from-top" className="projects__project">
         <img src={props.img} />
         <div className="project__about">
            <p>{props.desc}</p>
            <div className="project__btns">
               <a target="_blank" href={props.repo}>
                  <i className="bi bi-github"></i>
                  {t('repo')}
               </a>
               <a target="_blank" href={props.demo}>
                  {t('demo')}
               </a>
            </div>
         </div>
      </div>
   );
};

export default Project;
