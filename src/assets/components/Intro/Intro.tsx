import classes from "@/assets/components/Intro/Intro.module.scss";
import IntroWidget from "../Widgets/Intro-Widget";
import TickIcon from "@/assets/images/svg/tick-svg.svg?react";
import PlaneIcon from "@/assets/images/svg/plane.svg?react";
import SettingsIcon from "@/assets/images/svg/settings.svg?react";

const Intro = () => {
  const IntroText = [
    {
      title: "Enjoy some flexibility",
      description:
        "Stays with flexible cancellation make it easy to re-book if your plans change",
      icon: <TickIcon />,
    },
    {
      title: "More than 7M active trip",
      description:
        "More than 1 billion guests who've found getaways in over 120 countries and destinations",
      icon: <PlaneIcon />,
    },
    {
      title: "100+ filters for tailored stays",
      description:
        "Pick your price range, the number of rooms you want, and other key amenities to find the stay that fits your needs",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <>
      <div className={classes["intro"]} id="intro">
        <div className="container">
          <div className={classes["intro__main"]}>
            {IntroText.map(({ title, description, icon }) => (
              <IntroWidget
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
