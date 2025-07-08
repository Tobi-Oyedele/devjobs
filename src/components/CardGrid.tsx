import React from "react";
import Card from "./Card";
import type { Job } from "../types";

interface CardGridProps {
  jobs: Job[];
}

const CardGrid: React.FC<CardGridProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <Card
          key={job.id}
          id={job.id}
          logo={job.logo}
          logoBackground={job.logoBackground}
          company={job.company}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
        />
      ))}
    </div>
  );
};

export default CardGrid;
