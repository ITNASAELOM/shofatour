import classes from "./CustomerWidget.module.scss";

interface CustomerWidgetProps {
  title: string;
  icon?: string;
}

const CustomerWidget = ({ title, icon }: CustomerWidgetProps) => {
  return (
    <>
      <div className={classes["header"]}>
        <div>
          <img className={classes["icon"]} src={icon} alt="" />
        </div>
        <span className={classes["title"]}>{title}</span>
      </div>
    </>
  );
};

export default CustomerWidget;
