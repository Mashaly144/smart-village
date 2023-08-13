import React from "react";
import craft1 from "../asists/الحرف والعمال/Mask Group 19.png";
import craft2 from "../asists/الحرف والعمال/Mask Group 26.png";
import craft3 from "../asists/الحرف والعمال/Mask Group 20.png";
import craft4 from "../asists/الحرف والعمال/Mask Group 21.png";
import craft5 from "../asists/الحرف والعمال/Mask Group 24.png";
import craft6 from "../asists/الحرف والعمال/Mask Group 25.png";
import craft7 from "../asists/الحرف والعمال/Mask Group 23.png";
import ServiceHeader from "../components/ServiceHeader";
import Clinec from "../components/Clinec";
import { useState } from "react";
import CraftCard from "../components/CraftCard";

function LinkOfCrafts() {
  const [clinecState, setCliencState] = useState({
    activeClince: null,
    clinecs: [
      { title: "كهربائي", img: craft1 },
      { title: " نقاش", img: craft2 },
      { title: " نجار", img: craft3 },
      { title: "مهندس", img: craft4 },
      { title: "خباز", img: craft5 },
      { title: "سائق", img: craft6 },
      { title: "رسام", img: craft7 },
    ],
  });
  function activeHandler(index) {
    setCliencState({
      ...clinecState,
      activeClince: clinecState.clinecs[index],
    });
  }
  function addActiveHandler(index) {
    if (clinecState.clinecs[index] === clinecState.activeClince) {
      return "active";
    } else {
      return "ff";
    }
  }

  const craftData = [
    {
      name: "أحمد محمود محمد",
      specialty: "كهربائي",
      phoneNumber: "01010101010011",
      date: " من 12 ص إلي 10 م",
      place: "المنشية / المساكن الشعبية",
    },
    {
      name: "أحمد محمود محمد",
      specialty: "نقاش",
      phoneNumber: "01010101010011",
      date: " من 12 ص إلي 10 م",
      place: "المنشية / المساكن الشعبية",
    },
    {
      name: "أحمد محمود محمد",
      specialty: "نجار",
      phoneNumber: "01010101010011",
      date: " من 12 ص إلي 10 م",
      place: "المنشية / المساكن الشعبية",
    },
    {
      name: "أحمد محمود محمد",
      specialty: "خباز",
      phoneNumber: "01010101010011",
      date: " من 12 ص إلي 10 م",
      place: "المنشية / المساكن الشعبية",
    },
    {
      name: "أحمد محمود محمد",
      specialty: "مهندس",
      phoneNumber: "01010101010011",
      date: " من 12 ص إلي 10 م",
      place: "المنشية / المساكن الشعبية",
    },
    {
      name: "أحمد محمود محمد",
      specialty: "سائق",
      phoneNumber: "01010101010011",
      date: " من 12 ص إلي 10 م",
      place: "المنشية / المساكن الشعبية",
    },
    {
      name: "أحمد محمود محمد",
      specialty: "رسام",
      phoneNumber: "01010101010011",
      date: " من 12 ص إلي 10 م",
      place: "المنشية / المساكن الشعبية",
    },
  ];
  return (
    <>
      <ServiceHeader title="الحرف والعمال" />
      <section className="container">
        <div className="elnady hospital">
          <div className="sports__holder d-flex justify-content-between flex-wrap">
            {clinecState.clinecs.map((cl, i) => (
              <Clinec
                key={i}
                title={cl.title}
                img={cl.img}
                i={i}
                onClick={activeHandler}
                className={addActiveHandler(i)}
              />
            ))}
          </div>
          <div className="doctors">
            {craftData.map((doctor, i) => {
              if (clinecState.activeClince == null) {
                return <CraftCard key={i} {...doctor} />;
              }
              if (clinecState.activeClince.title === doctor.specialty) {
                return <CraftCard key={i} {...doctor} />;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default LinkOfCrafts;
