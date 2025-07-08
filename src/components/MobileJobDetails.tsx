import Logo from "./Logo";
import Button from "./Button";
import type { Job } from "../types";
import JobDetailsMainContent from "./JobDetailsMainContent";

interface Props {
  job: Job;
}

export default function MobileJobDetails({ job }: Props) {
  return (
    <div className="md:hidden">
      <div className="bg-white grid place-items-center relative -mt-6 pb-6 rounded-lg mx-4">
        <div></div>
        <Logo
          logo={job.logo}
          logoBackground={job.logoBackground}
          company={job.company}
          className="grid place-items-center rounded-xl size-12.5 -translate-y-1/2"
        />
        <div className="flex flex-col gap-2.5 items-center justify-center">
          <h1 className="font-bold text-midnight text-2xl">{job.company}</h1>
          <p className="cursor-pointer">
            <link rel="stylesheet" href={job.website} />
            {job.company}.com
          </p>

          <button className="text-primary-blue font-bold bg-background hover:bg-button-background p-3.5 rounded-md cursor-pointer">
            <link rel="stylesheet" href={job.apply} />
            Company Site
          </button>
        </div>
      </div>

      <div className="bg-white mt-9 mx-4 rounded-lg px-5 pt-6 md:mx-11 md:px-8 lg:mx-64 lg:px-11">
        <div className="space-y-8 md:flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-secondary-dark-grey">
              {job.postedAt} • {job.contract}
            </p>
            <h1 className="text-dark-mode font-bold text-xl md:text-3xl">
              {job.position}
            </h1>
            <p className="text-primary-blue font-bold">{job.location}</p>
          </div>
          <div>
            <Button name="Apply Now" onClick={() => {}} />
          </div>
        </div>

        {/*Main content*/}
        <JobDetailsMainContent job={job} />
      </div>

      {/*Footer content*/}
      <div className="bg-white mt-6 flex justify-center p-4 rounded-xl">
        <Button name="Apply Now" onClick={() => {}} />
      </div>
    </div>
  );
}
