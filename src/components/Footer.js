import "./Footer.css";
import footerImg from "../asists/img project/66.PNG";
import linkdin from "../asists/واجهة القرية/Icon awesome-linkedin.png";
import facebook from "../asists/واجهة القرية/Icon awesome-facebook-square.png";
import whatsapp from "../asists/واجهة القرية/Icon awesome-whatsapp-square.png";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <section
      className="footer d-flex justify-content-between flex-wrap"
      id="footer"
    >
      <div className="footer__img col-lg-6 col-md-12 align-items-center">
        <img src={footerImg} alt="footer" />
      </div>
      <div className="footer__info  col-lg-6 col-md-12">
        <ul className="d-flex">
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
          <li>
            <Link to="/villages">خدمات القرية</Link>
          </li>
          <li>
            <Link to="/ratevillage">تقيم القري</Link>
          </li>
          <li>
            <Link to="/aboutvillage">عن القرية</Link>
          </li>
          <li>
            <Link to="/">المساعدة</Link>
          </li>
        </ul>
        <div className="d-flex justify-content-around">
          <ul>
            <li>
              <Link to="/hospitals">المستشفيات الحكومية</Link>
            </li>
            <li>
              <Link to="/industry">المصانع العامة</Link>
            </li>
            <li>
              <Link to="/clinecs">العيادات </Link>
            </li>
            <li>
              <Link to="/">وسائل المواصلات</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/school">المدارس الحكومية</Link>
            </li>
            <li>
              <Link to="/shops">المولات والمحلات </Link>
            </li>
            <li>
              <Link to="/craft"> الصنايعية</Link>
            </li>
            <li>
              <Link to="/ambulance">الإسعاف و الطوارئ</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="social__icons">
            <p>Connect Us</p>
            <img src={facebook} alt="" />
            <img src={whatsapp} alt="" />
            <img src={linkdin} alt="" />
          </div>
          <p>Development Of Egyptian Team</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
