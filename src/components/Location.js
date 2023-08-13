import { Col, Container, Row } from "react-bootstrap";
import imgStore from "../asists/واجهة القرية/Icon map-store.png";
import imgMap from "../asists/واجهة القرية/2080.png";
import "./Location.css";
const Location = (props) => {
  return (
    <section className="location__section" id="location">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="location__data">
              <h1>تقع رأس الخليج علي ضفه نهر النيل فرع دمياط داخل دلتا مصر</h1>
              <div className="d-flex justify-content-between">
                <span>رأس الخليج البلد</span>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    +3400 <br /> فدان
                  </p>
                  <img src={imgStore} alt="" />
                  <img src={imgMap} className="background" alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="location__info">
              <h1>الموقع الجغرافي :</h1>
              <p>
                تقع رأس الخليج علي ضفه نهر النيل فرع دمياط داخل دلتا مصر فيما
                بين مركزي شربين محافظه الدقهليه حنوبا ومركز كفر سعد شمالا ومركز
                فارسكور في الشمال الشرقي التابعين لمحافظه دميياط وتبعد جغرافيا
                عن شربين 7 ك وعن عاصمه الدقهليه 38 كم وتعد رأس الخليج أخر قريه
                محافظه الدقهليه وأول قريه بالنسبه لمحافظه دمياط
              </p>
              <h1>المساحة :</h1>
              <p>
                تقع رأس الخليج علي ضفه نهر النيل فرع دمياط داخل دلتا مصر فيما
                بين مركزي شربين محافظه الدقهليه حنوبا ومركز كفر سعد شمالا ومركز
                فارسكور في الشمال الشرقي التابعين لمحافظه دميياط وتبعد جغرافيا
                عن شربين 7 ك وعن عاصمه الدقهليه 38 كم وتعد رأس الخليج أخر قريه
                محافظه الدقهليه وأول قريه بالنسبه لمحافظه دمياط
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Location;
