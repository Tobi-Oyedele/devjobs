import SearchIcon2 from "../assets/desktop/icon-search.svg";
import LocationIcon from "../assets/desktop/icon-location.svg";
import type React from "react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (title: string, location: string, fullTimeOnly: boolean) => void;
}

const DesktopSearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    fullTimeOnly: false,
  });

  return (
    <div className="hidden md:flex md:justify-between items-center gap-4 bg-white px-6 py-4 rounded-xl w-full max-w-6xl mx-auto md:w-[90%] lg:w-full">
      {/* Filter by title with search icon*/}
      <div className="flex items-center gap-2.5 min-w-0">
        {/* Desktop Placeholder */}
        <div className="hidden lg:flex items-center gap-2.5 min-w-[320px]">
          <img src={SearchIcon2} />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise..."
            className="outline-none w-full cursor-pointer"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Tablet Placeholder */}
        <img src={SearchIcon2} className="hidden md:block lg:hidden" />
        <input
          type="text"
          placeholder="Filter by title..."
          className="outline-none hidden md:block lg:hidden w-full cursor-pointer"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Filter by location */}
      <div className="flex items-center gap-2.5 min-w-0">
        <img src={LocationIcon} alt="location icon" />
        <input
          type="text"
          placeholder="Filter by location..."
          className="outline-none cursor-pointer"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Checkbox */}
      <label className="text-midnight font-bold text-center flex items-center whitespace-nowrap gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={filters.fullTimeOnly}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, fullTimeOnly: e.target.checked }))
          }
        />
        Full Time Only
      </label>

      {/* Search button */}
      <button
        className="cursor-pointer bg-primary-blue md:p-3 lg:px-8 rounded-lg text-white hover:bg-primary-light-violet"
        onClick={() => {
          console.log("Search triggered", { title, location });
          onSearch(title, location, filters.fullTimeOnly);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default DesktopSearchBar;
