import type React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

interface CardProps {
  key: number;
  id: number;
  logo: string;
  logoBackground: string;
  company: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}

const Card: React.FC<CardProps> = ({
  id,
  logo,
  logoBackground,
  company,
  position,
  postedAt,
  contract,
  location,
}) => {
  const navigate = useNavigate();

  return (
    <div className="px-3 py-5 lg:px-4 lg:py-6">
      <div className="bg-white rounded-md px-5 pb-5 flex flex-col gap-2.5 mx-8 md:mx-0">
        <div>
          <Logo
            logo={logo}
            logoBackground={logoBackground}
            company={company}
            className="size-12.5 grid place-items-center rounded-xl relative -translate-y-1/2"
          />
        </div>

        <div>
          <p className="text-secondary-dark-grey">
            {postedAt} • {contract}
          </p>
          <h1 className="text-dark-mode font-bold"> {position} </h1>
          <p className="text-secondary-dark-grey">{company}</p>
        </div>

        <div>
          <button
            className="cursor-pointer text-primary-blue font-bold"
            onClick={() => navigate(`/job/${id}`)}
          >
            {location}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
