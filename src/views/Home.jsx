import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

const Home = () => {
   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   return (
      <>
         <Header />
      </>
   );
};

export default Home;
