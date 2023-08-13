import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import chatIcon from "../asists/واجهة القرية/Icon awesome-rocketchat.png";
import "./HomeLanding.css";
import chatImg from "../asists/واجهة القرية/chatImg.png";
import { Link } from "react-router-dom";
const HomeLanding = (props) => {
  return (
    <section className="home__landing" id="home__landing">
      <Container>
        <Row>
          <ul className="d-flex flex-wrap">
            <li>
              <Link to="/hospitals"> المستشفيات الحكوميه </Link>
            </li>
            <li>
              <Link to="/clinecs"> العيادات</Link>
            </li>
            <li>
              <Link to="/school"> المدارس الحكوميه </Link>
            </li>
            <li>
              <Link to="/industry"> المصانع العامة </Link>
            </li>
            <li>
              <Link to="/shops"> المولات والمحلات</Link>
            </li>

            <li>
              <Link to="/craft"> الصنايعية </Link>
            </li>

            <li>
              <Link to="/elnady">النادي الرياضي</Link>
            </li>
            <li>
              <Link to="/ambulance"> الإسعاف والطوارئ </Link>
            </li>
          </ul>
        </Row>

        <div className="home__content">
          <Row className="justify-content-between">
            <Col lg={8}>
              <div className="home__info">
                <input
                  type="text"
                  class="form-control"
                  placeholder="بحث عن قرية أو خدمة داخل القرية"
                />
                <Carousel>
                  <Carousel.Item interval={3000}>
                    <div className="slide__info">
                      <h1>قرية راس الخليج</h1>
                      <p>
                        هي احدي قري التابعه لمركز شربين محافظه الدقهليه من
                        جمهوريه مصر العربيه <br /> وتعد القريه انها منن أكبر
                        القري داخل مركز شربين
                      </p>
                      <a href="#">قراءه المزيد</a>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <div className="slide__info">
                      <h1>قرية راس الخليج</h1>
                      <p>
                        هي احدي قري التابعه لمركز شربين محافظه الدقهليه من
                        جمهوريه مصر العربيه <br /> وتعد القريه انها منن أكبر
                        القري داخل مركز شربين
                      </p>
                      <a>قراءه المزيد</a>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <div className="slide__info">
                      <h1>قرية راس الخليج</h1>
                      <p>
                        هي احدي قري التابعه لمركز شربين محافظه الدقهليه من
                        جمهوريه مصر العربيه <br /> وتعد القريه انها منن أكبر
                        القري داخل مركز شربين
                      </p>
                      <a>قراءه المزيد</a>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col lg={3}>
              <div className="home__chat mt-4">
                <div className="header__chat d-flex">
                  <img src={chatIcon} alt="" />
                  <h1>الشات بوت</h1>
                </div>
                <div className="body__chat">
                  <p>
                    التواصل مع الدعم الفني <br />
                    الدعم المباشر
                  </p>
                  <img src={chatImg} alt="" />
                </div>
                <a className="chat__btn">محادثة</a>
                <a className="chat__cont">متابعة المحادثة</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default HomeLanding;
