const DoctorCardTime = (props) => {
  return (
    <div className={props.dayAva ? "time__holder" : "time__holder inactive"}>
      <p className="doctor__day">{props.day}</p>
      <p className="doctor__date">
        {props.dayAva ? `${props.date}` : "لايوجد مواعيد متاحه الان"}
      </p>
      <p className="doctor__ava">{props.dayAva ? "متاح" : "غير متاح"}</p>
    </div>
  );
};
export default DoctorCardTime;
