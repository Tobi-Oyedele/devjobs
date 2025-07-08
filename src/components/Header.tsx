import Logo from "../assets/desktop/logo.svg";
import IconSun from "../assets/desktop/icon-sun.svg";
import IconMoon from "../assets/desktop/icon-moon.svg";
import ToggleIcon1 from "../assets/desktop/toggle-icon1.svg";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import type React from "react";

interface HeaderProps {
  onSearch: (title: string, location: string, fullTimeOnly: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const location = useLocation();
  const isJobDetailPage = location.pathname.startsWith("/job/");

  return (
    <div className="relative">
      <div className="bg-[url('../src/assets/mobile/bg-pattern-header.svg')] md:bg-[url('../src/assets/tablet/bg-pattern-header.svg')] lg:bg-[url('../src/assets/desktop/bg-pattern-header.svg')] bg-cover bg-center bg-no-repeat pt-5 pb-24 px-3 md:px-5 md:pt-7 lg:pt-9 lg:px-6 md:rounded-bl-[80px]">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="logo" />
          <div className="flex items-center gap-2.5">
            <img src={IconSun} alt="icon sun" />
            <button className="cursor-pointer">
              <img src={ToggleIcon1} alt="toggle icon" />
            </button>
            <img src={IconMoon} alt="icon moon" />
          </div>
        </div>
      </div>

      {!isJobDetailPage && <SearchBar onSearch={onSearch} />}
    </div>
  );
};

export default Header;
