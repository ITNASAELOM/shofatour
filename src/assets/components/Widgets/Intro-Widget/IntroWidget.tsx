import classes from "./IntroWidget.module.scss";

interface IntroWidgetProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const IntroWidget = ({ title, description, icon }: IntroWidgetProps) => {
  return (
    <>
      <div className={classes["intro"]}>
        <div className={classes["icon"]}>{icon}</div>
        <span className={classes["title"]}>{title}</span>
        <p className={classes["description"]}>{description}</p>
      </div>
    </>
  );
};

export default IntroWidget;
