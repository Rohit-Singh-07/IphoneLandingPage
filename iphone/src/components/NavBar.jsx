import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from '../constants'

const NavBar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" />

        <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((elem, idx) => <div key={idx} className="px-5 text-sm  cursor-pointer text-gray hover:text-white transition-all">{elem}</div>)}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1"><img src={searchImg} alt="search" width={18} height={18} />
        <img src={bagImg} alt="search" width={18} height={18} /></div>
      </nav>
    </header>
  );
};

export default NavBar;
