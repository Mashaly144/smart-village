import { Container, Row } from "react-bootstrap";

import imgRate from "../asists/واجهة القرية/img99.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HighRate.css";
const HighRate = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="highrate" id="highrate">
      <Container>
        <h1>الخدمات الأعلي تقيم داخل القرية الآن</h1>
        <Row>
          <Carousel responsive={responsive}>
            <div className="slide__info">
              <h1>قرية راس الخليج</h1>
              <img src={imgRate} alt="" />
              <p>السبب : استخراج فيزا والخدمات الاخري </p>
            </div>
            <div className="slide__info">
              <h1>قرية راس الخليج</h1>
              <img src={imgRate} alt="" />
              <p>السبب : استخراج فيزا والخدمات الاخري </p>
            </div>
            <div className="slide__info">
              <h1>قرية راس الخليج</h1>
              <img src={imgRate} alt="" />
              <p>السبب : استخراج فيزا والخدمات الاخري </p>
            </div>
            <div className="slide__info">
              <h1>قرية راس الخليج</h1>
              <img src={imgRate} alt="" />
              <p>السبب : استخراج فيزا والخدمات الاخري </p>
            </div>
            <div className="slide__info">
              <h1>قرية راس الخليج</h1>
              <img src={imgRate} alt="" />
              <p>السبب : استخراج فيزا والخدمات الاخري </p>
            </div>
          </Carousel>
          {/* <Carousel>
            <Carousel.Item interval={3000}>
              <div className="slide__holder">
                <div className="slide__info">
                  <h1>قرية راس الخليج</h1>
                  <img src={imgRate} alt="" />
                  <p>السبب : استخراج فيزا والخدمات الاخري </p>
                </div>
                <div className="slide__info">
                  <h1>قرية راس الخليج</h1>
                  <img src={imgRate} alt="" />
                  <p>السبب : استخراج فيزا والخدمات الاخري </p>
                </div>
                <div className="slide__info">
                  <h1>قرية راس الخليج</h1>
                  <img src={imgRate} alt="" />
                  <p>السبب : استخراج فيزا والخدمات الاخري </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <div className="slide__holder">
                <div className="slide__info">
                  <h1>قرية راس الخليج</h1>
                  <img src={imgRate} alt="" />
                  <p>السبب : استخراج فيزا والخدمات الاخري </p>
                </div>
                <div className="slide__info">
                  <h1>قرية راس الخليج</h1>
                  <img src={imgRate} alt="" />
                  <p>السبب : استخراج فيزا والخدمات الاخري </p>
                </div>
                <div className="slide__info">
                  <h1>قرية راس الخليج</h1>
                  <img src={imgRate} alt="" />
                  <p>السبب : استخراج فيزا والخدمات الاخري </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel> */}
        </Row>
      </Container>
    </section>
  );
};
export default HighRate;
