import ServiceHeader from "../components/ServiceHeader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import tennis from "../asists/النادي الرياضي/Mask Group 30.png";
import "./Elnady.css";
const Elnady = (props) => {
  return (
    <>
      <ServiceHeader title="النادي الرياضي" />
      <Container>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="النادي">
            <div className="elnady">
              <h1>الانشطة المتوفرو داخل النادي الرياضي</h1>
              <div className="sports__holder d-flex justify-content-between flex-wrap">
                <div className="sport col-xl-4">
                  <h2>تنس الطاوله</h2>
                  <img src={tennis} />
                </div>
                <div className="sport col-xl-4">
                  <h2>تنس الطاوله</h2>
                  <img src={tennis} />
                </div>
                <div className="sport col-xl-4">
                  <h2>تنس الطاوله</h2>
                  <img src={tennis} />
                </div>
                <div className="sport col-xl-4">
                  <h2>تنس الطاوله</h2>
                  <img src={tennis} />
                </div>
                <div className="sport col-xl-4">
                  <h2>تنس الطاوله</h2>
                  <img src={tennis} />
                </div>
                <div className="sport col-xl-4">
                  <h2>تنس الطاوله</h2>
                  <img src={tennis} />
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="عن النادي">
            <div className="d-flex justify-content-center align-items-center">
              <p className="elnady__p">هنا تظهر معلومات عن النادي</p>
            </div>
          </Tab>
          <Tab eventKey="contact" title="تقيمات الزائرين">
            <div className="d-flex justify-content-center align-items-center">
              <p className="elnady__p">هنا تظهر تقيمات الزائرين</p>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
export default Elnady;
