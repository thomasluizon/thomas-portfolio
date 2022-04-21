import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header/Header';
import Home from '../components/Home';

const App = () => {
   const languages = [
      {
         code: 'pt',
         name: 'Português',
         country_code: 'br',
      },
      {
         code: 'en',
         name: 'English',
         country_code: 'us',
      },
   ];

   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   return (
      <>
         <Header languages={languages} />
         <main>
            <Home />
         </main>
      </>
   );
};

export default App;
