import CustomerWidget from "../Widgets/Customer-Widget";
import classes from "./Customer.module.scss";
import FirstImage from "@/assets/images/firstImage.jpg";
import SecondImage from "@/assets/images/secondImage.jpg";
import ThirdImage from "@/assets/images/thirdImage.jpg";
import FonImage from "@/assets/images/fonImage.jpg";

const Customer = () => {
  const dataOfCustomer = [
    {
      title: "Jhon De",
      icon: FirstImage,
    },
    {
      title: "Nastya Yuk",
      icon: SecondImage,
    },
    {
      title: "Kim Pak",
      icon: ThirdImage,
    },
  ];

  return (
    <>
      <div className="container" id="customer">
        <span className={classes["customer__text"]}>What our happy client</span>
        <div className={classes["customer"]}>
          <div className={classes["customer__left"]}>
            <span>
              "Jhon De is a native of the region. He was a host herself before
              he started offering her service to other people, so he knows about
              the necessity to have someone to take care of all the little
              things. He enjoyed his travel. You can also travel and join to us.
              Because Shofa tour is the best !"
            </span>
            <div className={classes["customer__left-img"]}>
              {dataOfCustomer.map(({ title, icon }) => (
                <CustomerWidget title={title} icon={icon} />
              ))}
            </div>
          </div>
          <div className={classes["customer__right"]}>
            <img src={FonImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
