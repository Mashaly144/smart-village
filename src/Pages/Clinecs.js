import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import ServiceHeader from "../components/ServiceHeader";
import DoctorCard from "../components/DoctorCard";
import doctorImg from "../asists/العيادات الخصوصية/Img background.png";

import { useRef, useState } from "react";
export default function Clinecs(props) {
  const doctorData = [
    {
      img: doctorImg,
      name: "دكتور محمد جمال",
      specialty: "احصائي الباطنه والجهاز الهضمي",
      specialtyName: "امراض القلب",
      scanState: "مجاني حكومي",
      place: "مركز طب رأس الخليج",
      days: [
        {
          day: "التلات",
          dayAva: true,
          date: "من 5 حتي 12 مساءا",
        },
        {
          day: "الاثنين",
          dayAva: false,
          date: "من 5 حتي 12 مساءا",
        },
        {
          day: "الاحد",
          dayAva: true,
          date: "من 5 حتي 12 مساءا",
        },
        {
          day: "السبت",
          dayAva: true,
          date: "من 5 حتي 12 مساءا",
        },
      ],
    },
    {
      img: doctorImg,
      name: "دكتور محمد جمال",
      specialty: "احصائي الباطنه والجهاز الهضمي",
      specialtyName: "امراض الكلي",
      scanState: "مجاني حكومي",
      place: "مركز طب رأس الخليج",
      days: [
        {
          day: "التلات",
          dayAva: true,
          date: "من 5 حتي 12 مساءا",
        },
        {
          day: "الاثنين",
          dayAva: false,
          date: "من 5 حتي 12 مساءا",
        },
        {
          day: "الاحد",
          dayAva: true,
          date: "من 5 حتي 12 مساءا",
        },
        {
          day: "السبت",
          dayAva: true,
          date: "من 5 حتي 12 مساءا",
        },
      ],
    },
    {
      img: doctorImg,
      name: "دكتور محمد جمال",
      specialty: "احصائي الباطنه والجهاز الهضمي",
      specialtyName: "امراض الدم",
      scanState: "مجاني حكومي",
      place: "مركز طب رأس الخليج",
      days: [
        {
          day: "التلات",
          dayAva: true,
          date: "من 5 حتي 12 مساءا",
        },
        {
          day: "الاثنين",
          dayAva: false,
          date: "من 5 حتي 12 مساءا",
        },
        {
          day: "الاحد",
          dayAva: true,
          date: "من 5 حتي 12 مساءا",
        },
        {
          day: "السبت",
          dayAva: true,
          date: "من 5 حتي 12 مساءا",
        },
      ],
    },
  ];
  const [currentSpe, setCurrentSpe] = useState("كل التخصصات");

  const currentDoctorHandler = (current) => {
    setCurrentSpe(current);
  };
  console.log(currentSpe);

  return (
    <>
      <ServiceHeader title="العيادات الخصوصية" />
      <Container>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="الدكاترة">
            <select
              id="specialty"
              name="كل التخصصات"
              onChange={(e) => {
                currentDoctorHandler(e.target.value);
              }}
            >
              <option value="كل التخصصات">كل التخصصات</option>
              <option value="امراض القلب">امراض القلب</option>
              <option value="امراض الكلي">امراض الكلي</option>
              <option value="امراض الدم">امراض الدم</option>
            </select>
            <div className="doctors d-flex justify-content-center flex-wrap">
              {doctorData.map((doctor, i) => {
                if (currentSpe == "كل التخصصات") {
                  return <DoctorCard key={i} {...doctor} />;
                }
                if (currentSpe == doctor.specialtyName) {
                  return <DoctorCard key={i} {...doctor} />;
                }
              })}
            </div>
          </Tab>
          <Tab eventKey="profile" title="عن الدكاترة">
            <div className="d-flex justify-content-center align-items-center">
              <p className="elnady__p">هنا تظهر معلومات عن الدكاترة</p>
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
}
