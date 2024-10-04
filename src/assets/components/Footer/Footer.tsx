import classes from "./Footer.module.scss";
import WorldIcon from "@/assets/images/svg/world-tour-icon.svg?react";
import TelegramIcon from "@/assets/images/svg/telegram.svg?react";
import InstagramIcon from "@/assets/images/svg/instagram.svg?react";
import TwitterIcon from "@/assets/images/svg/twitter.svg?react";

const Footer = () => {
  return (
    <>
      <div className={classes["footer__home"]} id="contacts">
        <div className="container">
          <div className={classes["footer__header"]}>
            <div className={classes["contacts"]}>
              <div className={classes["footer__text"]}>
                <WorldIcon style={{ fill: "#d9ed82", width: 50, height: 50 }} />
                <p className={classes["footer__text-left"]}>
                  SHOFA
                  <span>TOUR</span>
                </p>
              </div>
              <div className={classes["footer__number"]}>+998977161910</div>
            </div>
            <div className={classes["divider"]}></div>
            <div className={classes["footer__link"]}>
              <div className={classes["footer__link-left"]}>
                Copyright 2024 Qayumov Mirislom
              </div>
              <div className={classes["footer__link-right"]}>
                <a target="_blank" href="https://t.me/Oktamjanovnaa">
                  <TelegramIcon
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                </a>
                <a target="_blank" href="">
                  <InstagramIcon style={{ height: 20, width: 20 }} />
                </a>
                <a target="_blank" href="">
                  <TwitterIcon style={{ height: 20, width: 20 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
