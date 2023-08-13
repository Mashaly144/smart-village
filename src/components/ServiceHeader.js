import "./ServiceHeader.css";
export default function ServiceHeader(props) {
  return (
    <div className="service__header">
      <h1>{props.title}</h1>
      <div className="bar"></div>
    </div>
  );
}
