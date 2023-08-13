import ServiceHeader from "../components/ServiceHeader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import "./Shops.css";

import Shop from "../components/shop";
const Shops = (props) => {
  const shopData = [
    { name: "ماركت الحسناء", place: "انقر هنا", href: "#" },
    { name: "ماركت الحسناء", place: "انقر هنا", href: "#" },
    { name: "ماركت الحسناء", place: "انقر هنا", href: "#" },
    { name: "ماركت الحسناء", place: "انقر هنا", href: "#" },
    { name: "ماركت الحسناء", place: "انقر هنا", href: "#" },
    { name: "ماركت الحسناء", place: "انقر هنا", href: "#" },
    { name: "ماركت الحسناء", place: "انقر هنا", href: "#" },
    { name: "ماركت الحسناء", place: "انقر هنا", href: "#" },
    { name: "ماركت الحسناء", place: "انقر هنا", href: "#" },
  ];

  return (
    <>
      <ServiceHeader title=" المولات والمحلات" />
      <Container>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="المحلات">
            <div className="elnady">
              <div className="shops__holder d-flex justify-content-between flex-wrap ">
                {shopData.map((shop, i) => {
                  return <Shop key={i} {...shop} />;
                })}
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="المولات">
            <div className="d-flex justify-content-center align-items-center">
              <p className="elnady__p">هنا تظهر المولات</p>
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
export default Shops;
