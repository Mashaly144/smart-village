import "./Clinec.css";
export default function Clinec(props) {
  return (
    <div
      className="clinec__holder col-xl-4"
      onClick={() => {
        props.onClick(props.i);
      }}
    >
      <h1>{props.title}</h1>
      <div className="clinec__image">
        <div className={`clinec__overlay ${props.className}`}></div>
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}
