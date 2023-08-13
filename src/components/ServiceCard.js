import bookmark from "../asists/img project/bookmark.svg";

export default function ServiceCard(props) {
  return (
    <div className="service__card col-lg-3 col-md-6 col-sm-12">
      <div className="badge">
        <p>{props.category}</p>
        <img src={bookmark} />
      </div>
      <div className="service__img">
        <img src={props.img} />
      </div>
      <p>{props.info}</p>
      <a>المزيد من المعلومات</a>
    </div>
  );
}
