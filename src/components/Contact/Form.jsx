import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './css/contact.css';

const Form = () => {
   const { t } = useTranslation();
   const [submitted, setSubmitted] = useState(false);
   const FORM_ENDPOINT = 'https://formsubmit.co/thomaslrgregorio@gmail.com';

   const handleSubmit = () => {
      setTimeout(() => {
         setSubmitted(true);
      }, 100);
   };

   if (submitted) {
      return (
         <>
            <p className="form__submitted">{t('form_submitted')}</p>
         </>
      );
   }

   return (
      <form
         action={FORM_ENDPOINT}
         onSubmit={handleSubmit}
         method="POST"
         target="_blank"
         data-aos="slide-from-top"
         className="contact__form"
      >
         <input
            type="text"
            id="name"
            name="Name"
            placeholder={t('full_name')}
            required
         />
         <div className="form__btn-wrapper">
            <input
               type="email"
               id="email"
               name="Email"
               placeholder="Email"
               required
            />
            <input
               type="tel"
               id="tel"
               name="Tel"
               placeholder={t('phone')}
               required
            />
         </div>
         <textarea
            placeholder={t('enter_message')}
            required
            rows="10"
            id="message"
            name="Message"
         ></textarea>
         <button type="submit">{t('submit')}</button>
      </form>
   );
};

export default Form;
