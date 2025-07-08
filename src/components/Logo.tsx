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

interface Props {
  logo: string;
  logoBackground: string;
  company: string;
  className?: string;
  imageClassName?: string;
}

export default function Logo({
  logo,
  logoBackground,
  company,
  className = "",
  imageClassName = "",
}: Props) {
  const resolvedLogo = logoMap[logo];

  return (
    <div className={`${className}`} style={{ backgroundColor: logoBackground }}>
      {resolvedLogo ? (
        <img
          src={resolvedLogo}
          alt={`${company} logo`}
          className={imageClassName}
        />
      ) : (
        <div className="text-red-500 text-sm">Logo not found</div>
      )}
    </div>
  );
}
