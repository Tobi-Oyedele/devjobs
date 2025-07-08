import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import data from "./data/data.json";
import type { Job } from "./types";

const App = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  const handleSearch = (
    title: string,
    location: string,
    fullTimeOnly: boolean
  ) => {
    const titleQuery = title.toLowerCase();
    const locationQuery = location.toLowerCase();

    const results = jobs.filter((job) => {
      const matchesTitle =
        job.position.toLowerCase().includes(titleQuery) ||
        job.company.toLowerCase().includes(titleQuery) ||
        job.contract.toLowerCase().includes(titleQuery);

      const matchesLocation = job.location
        .toLowerCase()
        .includes(locationQuery);

      const matchesFullTime = fullTimeOnly
        ? job.contract.toLowerCase() === "full time"
        : true;

      return matchesTitle && matchesLocation && matchesFullTime;
    });

    console.log("Filtered jobs:", results);
    setFilteredJobs(results);
  };

  useEffect(() => {
    setJobs(data);
    setFilteredJobs(data);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Header onSearch={handleSearch} />
      <MainContent jobs={filteredJobs} />
    </div>
  );
};

export default App;
