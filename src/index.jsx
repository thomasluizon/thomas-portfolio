import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import App from './views/App';
import './reset.css';
import './index.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

i18n
   .use(initReactI18next)
   .use(LanguageDetector)
   .use(HttpApi)
   .init({
      supportedLngs: ['pt', 'en'],
      fallbackLng: 'pt',
      detection: {
         order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
         caches: ['cookie'],
      },
      backend: {
         loadPath: '/assets/locales/{{lng}}/translation.json',
      },
   });

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
