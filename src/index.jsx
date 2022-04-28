import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from './views/App';
import './styles/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'flag-icon-css/css/flag-icons.min.css';

import translationEN from '../assets/locales/en/translation.json';
import translationPT from '../assets/locales/pt/translation.json';

const resources = {
   en: {
      translation: translationEN,
   },
   pt: {
      translation: translationPT,
   },
};

i18n
   .use(initReactI18next)
   .use(LanguageDetector)
   .init({
      supportedLngs: ['pt', 'en'],
      fallbackLng: 'pt',
      detection: {
         order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
         caches: ['cookie'],
      },
      resources,
   });

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
