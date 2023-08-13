import logo from "../asists/img project/لوجو المستخدم.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Star from "./Star";
import DoctorCardTime from "./DoctorCardTime";
import { useState, useEffect } from "react";

import "./DoctorCard.css";
const DoctorCard = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [days, setDays] = useState([1]);
  const fetchData = () => {
    if (props.days) {
      setDays(props.days);
    }
  };
  useEffect(() => {
    fetchData();
  });
  console.log(days);
  return (
    <div className="doctor__card d-flex flex-wrap justify-content-between">
      <div className="doctor__info d-flex col-lg-5 col-md-12 flex-wrap">
        <div className="doctor__img col-sm-12 col-lg-4">
          <img src={props.img} alt="" />
        </div>
        <div className="doctor__data">
          <p className="doctor__name">{props.name}</p>
          <p className="doctor__specialty">{props.specialty}</p>
          <Star />
          <p className="doctor__rate">التقييم العام من 5 زوار للدكتور</p>
          <h2>
            <img src={logo} alt="" /> دكتور : {props.specialtyName}
          </h2>
          <h2>
            <img src={logo} alt="" /> كشف : {props.scanState}
          </h2>
          <h2>
            <img src={logo} alt="" /> الأماكن : {props.place}
          </h2>
        </div>
      </div>

      <Carousel
        className="doctor__time d-flex justify-content-between col-lg-5 col-md-12"
        responsive={responsive}
      >
        {days.map((day, i) => {
          return (
            <div>
              <DoctorCardTime key={i} {...day} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default DoctorCard;
