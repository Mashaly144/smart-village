import { Container, Row } from "react-bootstrap";
import SectionHeader from "../Ui/SectionHeader";
import imgOrder from "../asists/واجهة القرية/Img Order2.png";
import "./News.css";
const News = (props) => {
  const news__data = [...props.news];
  return (
    <section className="news" id="news">
      <Container>
        <SectionHeader title="المعلومات الجديدة التي تم إضافتها لقرية رأس الخليج" />
        <Row>
          <div className="news__holder d-flex flex-wrap ">
            {news__data.map((neww, i) => {
              return (
                <div key={i} className="d-flex align-items-center col-lg-2">
                  <img src={imgOrder} alt="" />
                  <a href="">{neww.name}</a>
                </div>
              );
            })}
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default News;
