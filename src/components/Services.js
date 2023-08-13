import { Container, Row } from "react-bootstrap";
import SectionHeader from "../Ui/SectionHeader";
import imgOrder from "../asists/واجهة القرية/img66.png";
import "./Services.css";
import { useSelector } from "react-redux";
const Services = (props) => {
  const data = useSelector((state) => state.data);
  return (
    <section className="services" id="services">
      <Container>
        <SectionHeader title="بعض من الخدمات المتاحة داخل قرية رأس الخليج الأن" />
        <Row>
          <div className="services__holder d-flex ">
            {data.services.map((serv, i) => {
              return (
                <div key={i} className="service col-lg-3 col-md-6 col-sm-12">
                  <img src={imgOrder} alt="" />
                  <p>{serv.name}</p>
                  <a href="">المزيد من المعلومات</a>
                </div>
              );
            })}
          </div>
        </Row>
        <h3 className="text-center">رؤيه المزيد{` >>>`} </h3>
      </Container>
    </section>
  );
};
export default Services;
