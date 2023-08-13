import Star from "./Star";
import "./CraftCard.css";
import craftImg from "../asists/الحرف والعمال/what-is-teacher-burnout-600x400.png";
export default function CraftCard(props) {
  return (
    <div className="craftcard">
      <div className="work__avatar">
        <img src={craftImg} alt="" />
        <p> الاسم : {props.name}</p>
      </div>
      <div className="worker__rate">
        <Star></Star>
        <p>
          <span>التقييم العام</span> من 10 زوار {props.specialty}
        </p>
      </div>
      <div className="work__data">
        <div>
          <p>الوظيفه : {props.specialty}</p>
          <p>رقم الهاتف : {props.phoneNumber}</p>
        </div>
        <div>
          <p>الوظيفه : {props.place}</p>
          <p>رقم الهاتف : {props.date}</p>
        </div>
      </div>
    </div>
  );
}
