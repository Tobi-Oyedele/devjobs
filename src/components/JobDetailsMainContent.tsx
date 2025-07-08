import type { Job } from "../types";

interface Props {
  job: Job;
}

const JobDetailsMainContent = ({ job }: Props) => {
  return (
    <div className="mt-4 md:mt-0 text-secondary-dark-grey">
      <div className="pb-6">
        <p>{job.description}</p>
      </div>

      <h1 className="text-dark-mode font-bold text-xl">Requirements</h1>
      <div className="pt-6">
        <p>{job.requirements.content}</p>
      </div>

      <ul className="list-disc pl-3 py-6">
        {job.requirements.items.map((item: string, index: number) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>

      <h1 className="text-dark-mode font-bold text-xl">What You Will Do</h1>
      <div className="pt-6">
        <p>{job.role.content}</p>
      </div>

      <ul className="list-decimal pl-3 py-6">
        {job.role.items.map((item: string, index: number) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobDetailsMainContent;
