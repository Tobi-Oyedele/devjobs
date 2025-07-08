import type React from "react";
import CardGrid from "./CardGrid";
import type { Job } from "../types";

interface MainContentProps {
  jobs: Job[];
}

const MainContent: React.FC<MainContentProps> = ({ jobs }) => {
  return (
    <main className="mt-28 pb-10 min-h-screen">
      <CardGrid jobs={jobs} />
    </main>
  );
};

export default MainContent;
