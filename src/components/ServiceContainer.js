import { Container } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import "./ServiceContainer.css";
const ServiceContainer = ({ title, info }) => {
  return (
    <div className="service__container">
      <h1>{title}</h1>
      <Container>
        <div className="services__cards d-flex">
          {info.map((card, i) => {
            return (
              <ServiceCard
                key={i}
                category={card.badge}
                img={card.img}
                info={card.info}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default ServiceContainer;
