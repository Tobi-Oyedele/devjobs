import type React from "react";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";

interface SearchBarProps {
  onSearch: (title: string, location: string, fullTimeOnly: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="absolute grid item-center justify-center w-full -mt-8">
      {/* Mobile layout */}
      <MobileSearchBar onSearch={onSearch} />

      {/*Tablet and desktop layout*/}
      <DesktopSearchBar onSearch={onSearch} />
    </div>
  );
};

export default SearchBar;
