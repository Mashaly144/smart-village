import { Container, Row } from "react-bootstrap";
import SectionHeader from "../Ui/SectionHeader";
import imgOrder from "../asists/واجهة القرية/Img Order2.png";
import "./Workers.css";
const Workers = (props) => {
  const DUMMY_DATA = [
    {
      img: imgOrder,
      workerInfo: {
        name: "أحمد نيازي",
        work: "عامل كهربائي",
        phone: "010111111111",
      },
      url: "",
    },
    {
      img: imgOrder,
      workerInfo: {
        name: "أحمد نيازي",
        work: "عامل كهربائي",
        phone: "010111111111",
      },
      url: "",
    },
    {
      img: imgOrder,
      workerInfo: {
        name: "أحمد نيازي",
        work: "عامل كهربائي",
        phone: "010111111111",
      },
      url: "",
    },
    {
      img: imgOrder,
      workerInfo: {
        name: "أحمد نيازي",
        work: "عامل كهربائي",
        phone: "010111111111",
      },
      url: "",
    },
    {
      img: imgOrder,
      workerInfo: {
        name: "أحمد نيازي",
        work: "عامل كهربائي",
        phone: "010111111111",
      },
      url: "",
    },
    {
      img: imgOrder,
      workerInfo: {
        name: "أحمد نيازي",
        work: "عامل كهربائي",
        phone: "010111111111",
      },
      url: "",
    },
  ];
  return (
    <section className="workers" id="workers">
      <Container>
        <SectionHeader title="الصنايعية التي تم أضافتهم حديثا داخل القرية" />
          <div className="news__holder d-flex  flex-wrap container">
        <Row>
            {DUMMY_DATA.map((neww, i) => {
              return (
                <div
                  key={i}
                  className="d-flex align-items-center col-lg-2 col-md-4 col-sm-6 justify-content-center"
                >
                  <img src={neww.img} alt="" />
                  <div className="work__data d-block">
                    <p>{neww.workerInfo.name}</p>
                    <p>{neww.workerInfo.work}</p>
                    <p>{neww.workerInfo.phone}</p>
                  </div>
                </div>
              );
            })}
        </Row>
          </div>
      </Container>
    </section>
  );
};
export default Workers;
