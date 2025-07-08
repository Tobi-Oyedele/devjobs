import Logo from "./Logo";
import type { Job } from "../types";
import Button from "./Button";
import JobDetailsMainContent from "./JobDetailsMainContent";

interface Props {
  job: Job;
}

export default function DesktopJobDetails({ job }: Props) {
  return (
    <div className="md:block hidden">
      <div className="bg-white grid place-items-center relative -mt-6 rounded-lg md:mx-14 lg:mx-64">
        <div className="flex justify-between items-center w-full">
          {/*logo div*/}
          <div className="flex gap-8 items-center">
            <Logo
              logo={job.logo}
              logoBackground={job.logoBackground}
              company={job.company}
              className="flex items-center justify-center p-12"
            />
            <div className="">
              <p className="text-xl text-dark-mode font-bold">{job.company}</p>
              <p>{job.company}.com</p>
            </div>
          </div>
          <div>
            <button className="text-primary-blue font-bold bg-background hover:bg-button-background p-3.5 rounded-md cursor-pointer mr-10">
              <link rel="stylesheet" href={job.apply} />
              Company Site
            </button>
          </div>
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
            <Button name="Apply Now" />
          </div>
        </div>

        {/*Main content*/}
        <JobDetailsMainContent job={job} />
      </div>

      {/*Footer content*/}
      <div className="flex justify-between items-center p-5 bg-white mt-6 rounded-xl lg:px-64">
        <div>
          <h1 className="text-xl text-dark-mode font-bold">{job.position}</h1>
          <p className="text-secondary-dark-grey">So Digital Inc.</p>
        </div>
        <div>
          <Button name="Apply Now" />
        </div>
      </div>
    </div>
  );
}
