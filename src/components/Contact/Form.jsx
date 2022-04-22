import { useTranslation } from 'react-i18next';
import './css/contact.css';

const Form = () => {
   const { t } = useTranslation();
   return (
      <form data-aos="slide-from-top" className="contact__form">
         <input type="text" placeholder={t('full_name')} required />
         <div className="form__btn-wrapper">
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder={t('phone')} required />
         </div>
         <textarea
            placeholder={t('enter_message')}
            required
            rows="10"
         ></textarea>
         <button type="submit">{t('submit')}</button>
      </form>
   );
};

export default Form;
