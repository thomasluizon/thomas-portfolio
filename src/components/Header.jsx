const Header = () => {
   return (
      <header className="fixed inset-0 h-20 text-white max-w-container mx-auto px-4 flex justify-between items-center">
         <h1 className="text-xl font-bold">Portfolio</h1>
         <nav className="flex gap-12 items-center">
            <ul className="flex gap-12">
               <li>
                  <a className="hover:blur-[0.5px] active:text-main" href="#">
                     Início
                  </a>
               </li>
               <li>
                  <a className="hover:blur-[0.5px] active:text-main" href="#">
                     Sobre
                  </a>
               </li>
               <li>
                  <a className="hover:blur-[0.5px] active:text-main" href="#">
                     Projetos
                  </a>
               </li>
               <li>
                  <a className="hover:blur-[0.5px] active:text-main" href="#">
                     Contato
                  </a>
               </li>
            </ul>
            <select
               id="lang-selector"
               className="text-black py-1 px-2 outline-none rounded-xl"
            >
               <option value="portuguese">Português</option>
               <option value="english">English</option>
            </select>
         </nav>
      </header>
   );
};

export default Header;
