import Star from "./Star";
import tennis from "../asists/المولات والمحالات/Supermarket workers-cuate.png";
import { Link } from "react-router-dom";
const Shop = (props) => {
  return (
    <div className="shop col-lg-3 col-md-5 col-sm-12">
      <p>اسم المحل : {props.name}</p>
      <p>
        موقع المحل : <Link to={props.href}> انقر هنا</Link>
      </p>
      <div className="stars d-flex">
        <Star />
      </div>
      <p>التقيم العام من 5 لزوار المحل</p>
      <img src={tennis} alt="" />
    </div>
  );
};
export default Shop;
