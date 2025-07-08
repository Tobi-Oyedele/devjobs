import type React from "react";
import { useNavigate } from "react-router-dom";
import scootLogo from "../assets/logos/scoot.svg";
import blogrLogo from "../assets/logos/blogr.svg";
import vectorLogo from "../assets/logos/vector.svg";
import officeLiteLogo from "../assets/logos/officelite.svg";
import podLogo from "../assets/logos/pod.svg";
import creativeLogo from "../assets/logos/creative.svg";
import pomodoroLogo from "../assets/logos/pomodoro.svg";
import makerLogo from "../assets/logos/maker.svg";
import coffeeroastersLogo from "../assets/logos/coffeeroasters.svg";
import mastercraftLogo from "../assets/logos/mastercraft.svg";
import crowFundLogo from "../assets/logos/crowdfund.svg";
import typeMasterLogo from "../assets/logos/typemaster.svg";

const logoMap: { [key: string]: string } = {
  "scoot.svg": scootLogo,
  "blogr.svg": blogrLogo,
  "vector.svg": vectorLogo,
  "officelite.svg": officeLiteLogo,
  "pod.svg": podLogo,
  "creative.svg": creativeLogo,
  "pomodoro.svg": pomodoroLogo,
  "maker.svg": makerLogo,
  "coffeeroasters.svg": coffeeroastersLogo,
  "mastercraft.svg": mastercraftLogo,
  "crowdfund.svg": crowFundLogo,
  "typemaster.svg": typeMasterLogo,
};

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
  const resolvedLogo = logoMap[logo];
  const navigate = useNavigate();

  return (
    <div className="px-3 py-5 lg:px-4 lg:py-6">
      <div className="bg-white rounded-md px-5 pb-5 flex flex-col gap-2.5">
        <div
          className="size-12.5 grid place-items-center rounded-xl relative -translate-y-1/2"
          style={{ backgroundColor: logoBackground }}
        >
          {resolvedLogo ? (
            <img src={resolvedLogo} alt={`${company} logo`} />
          ) : (
            <div className="text-red-500">Logo not found</div>
          )}
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
