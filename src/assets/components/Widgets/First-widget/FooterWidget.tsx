import classes from "@/assets/components/Widgets/First-widget/FooterWidget.module.scss";

interface FooterWidgetProps {
  title: string;
  description: string;
  text: string;
}

const FooterWidget = ({ title, description, text }: FooterWidgetProps) => {
  return (
    <>
      <div className={classes["column"]}>
        <span className={classes["title"]}>{title}</span>
        <p className={classes["description"]}>{description}</p>
        <span className={classes["text"]}>{text}</span>
      </div>
    </>
  );
};

export default FooterWidget;
