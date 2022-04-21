import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';

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
      Aos.init({ duration: 2500 });
   }, []);

   return (
      <>
         <Header languages={languages} />
         <main>
            <Home />
         </main>
         <Footer />
      </>
   );
};

export default App;
