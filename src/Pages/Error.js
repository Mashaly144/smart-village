import { Link } from "react-router-dom";
import errorImg from "../asists/error.gif";
export default function ErrorPage() {
  return (
    <div className="error__page">
      <img src={errorImg} alt="error" />
      <Link to="/">
        <p className="err__btn">GO BACK</p>
      </Link>
    </div>
  );
}
