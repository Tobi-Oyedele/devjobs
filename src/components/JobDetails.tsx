import { useParams } from "react-router-dom";
import JobData from "../data/data.json";
import { useEffect, useState } from "react";
import Header from "./Header";
import MobileJobDetails from "./MobileJobDetails";
import DesktopJobDetails from "./DesktopJobDetails";
import type { Job } from "../types";

export default function JobDetail() {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const foundJob = JobData.find((job) => job.id === Number(jobId));
    setJob(foundJob || null);
  }, [jobId]);

  if (!job) return <p>Job not found.</p>;

  return (
    <div className="bg-background min-h-screen">
      <Header onSearch={() => {}} />
      <DesktopJobDetails job={job} />
      <MobileJobDetails job={job} />
    </div>
  );
}
