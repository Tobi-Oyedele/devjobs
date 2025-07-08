import React, { useState } from "react";
import SearchIcon from "../assets/mobile/icon-search-2.svg";
import LocationIcon from "../assets/desktop/icon-location.svg";
import FilterIcon from "../assets/mobile/icon-filter.svg";
import Modal from "./Modal";
import Button from "./Button";

interface SearchBarProps {
  onSearch: (title: string, location: string, fullTimeOnly: boolean) => void;
}

const MobileSearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    fullTimeOnly: false,
  });

  return (
    <>
      <div className="flex items-center justify-between bg-white px-4 py-5 rounded-xl md:hidden">
        <input
          type="text"
          placeholder="Filter by title..."
          className="outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex items-center gap-4">
          {/* Filter Icon*/}
          <button className="cursor-pointer">
            <img
              src={FilterIcon}
              alt="filter icon"
              onClick={() => setIsModalOpen(true)}
            />
          </button>

          {/* Search Icon*/}
          <button className="bg-primary cursor-pointer">
            <img
              src={SearchIcon}
              alt="search icon"
              className="bg-primary-blue p-3 rounded-lg"
              onClick={() => {
                console.log("Search triggered", { title, location });
                onSearch(title, location, filters.fullTimeOnly);
              }}
            />
          </button>
        </div>
      </div>

      {/* Modal (opens when filter icon is clicked) */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/*div holding filter by location */}
        <div className="flex gap-2.5 items-center">
          <img src={LocationIcon} alt="Location icon" />
          <input
            type="text"
            placeholder="Filter by location..."
            className="outline-none cursor-pointer"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="w-full h-[1px] bg-gray-400"></div>

        <div className="flex flex-col gap-3.5">
          {/* Checkbox */}
          <label className="text-midnight font-bold text-center flex items-center whitespace-nowrap gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={filters.fullTimeOnly}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  fullTimeOnly: e.target.checked,
                }))
              }
            />
            Full Time Only
          </label>
          {/* Search button */}
          <Button name="Search" />
        </div>
      </Modal>
    </>
  );
};

export default MobileSearchBar;
