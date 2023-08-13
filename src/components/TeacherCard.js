import { Row } from "react-bootstrap";
import teacherImg from "../asists/المدارس/what-is-teacher-burnout-600x400.png";
import Star from "./Star";
import "./TeacherCard.css";
const TeacherCard = (props) => {
  return (
    <div className="teacher__card col-lg-5 ">
      <h1 className="school__name">{props.school}</h1>
      <div className="teacher__info d-flex justify-content-between">
        <Row>
          <div className="teacher__imgHolder col-lg-4 col-sm-12">
            <img src={teacherImg} alt="" />
          </div>
          <div className="teacher__data col-lg-8 col-sm-12">
            <p>
              {" "}
              <span>الاسم : </span>
              {props.name}
            </p>
            <p>
              {" "}
              <span>المادة المدرسة : </span>
              {props.subject}
            </p>
            <Star />
            <p>
              {" "}
              <span>التقييم العام : </span>
              {props.rate}
            </p>
            <p>
              <span> مرحلة التدريس : </span>
              {props.phase}
            </p>
          </div>
        </Row>
      </div>
    </div>
  );
};
export default TeacherCard;
