// import FooterWidget from "@/assets/components/Widgets/First-widget";
import classes from "@/assets/components/Header/Header.module.scss";
import WorldIcon from "@/assets/images/svg/world-tour-icon.svg?react";
import { useRef } from "react";

const Header = () => {
  // const columnsOfFooter = [
  //   {
  //     title: "01",
  //     value: "debt",
  //     description: "Choose place, activity and time",
  //     text: "Every can choose a root and activity according to his taste and possibilities",
  //   },
  //   {
  //     title: "02",
  //     value: "report",
  //     description: "Find different people and friends",
  //     text: "Every can choose a root and activity according to his taste and possibilities",
  //   },
  //   {
  //     title: "03",
  //     value: "news",
  //     description: "Start chat and offer to go",
  //     text: "Every can choose a root and activity according to his taste and possibilities",
  //   },
  // ];
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuButtonClick = () => {
    const classList = menuRef.current?.classList;

    if (classList?.contains(classes["show"])) {
      classList?.remove(classes["show"]);
    } else {
      classList?.add(classes["show"]);
    }
  };

  return (
    <>
      <div className={classes["home"]} id="home">
        <div className="container">
          <div className={classes["header"]}>
            <div className={classes["header__left"]}>
              <div className={classes["header__left-logo"]}>
                <WorldIcon style={{ fill: "#d9ed82", width: 50, height: 50 }} />
                <p className={classes["header__left-text"]}>
                  SHOFA
                  <span>TOUR</span>
                </p>
              </div>
            </div>
            <div
              ref={menuRef}
              className={`${classes["header__right"]} ${classes["desktop"]}`}
            >
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#intro">Intro</a>
                </li>
                <li>
                  <a href="#customer">Customer</a>
                </li>
                <li>
                  <a href="#contacts">Contacts</a>
                </li>
              </ul>
            </div>
            <button
              className={classes["menu-button"]}
              type="button"
              onClick={handleMenuButtonClick}
            >
              <span className={classes["menu-button__item"]}>Menu</span>
            </button>
          </div>
          <div className={classes["center"]}>
            <h1 className={classes["center-text"]}>
              Explore the world with exciting people
            </h1>
            <span>We help people to find ideal company for the join trips</span>
            <button>
              Start your trips
              <img src="" alt="" />
            </button>
          </div>
          <div className={classes["footer"]}>
            {/* <div className={classes["divider"]}></div>
            <div className={classes["footer__text"]}>
              {columnsOfFooter.map(({ title, description, text }) => (
                <FooterWidget
                  title={title}
                  description={description}
                  text={text}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
