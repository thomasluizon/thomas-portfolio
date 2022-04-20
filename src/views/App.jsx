import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Home from '../components/Home';

const App = () => {
   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   return (
      <>
         <Header />
         <main>
            <Home />
         </main>
      </>
   );
};

export default App;
