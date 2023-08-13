import ServiceHeader from "../components/ServiceHeader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import tennis from "../asists/النادي الرياضي/Mask Group 30.png";
import "./Hospitals.css";
import Clinec from "../components/Clinec";
import { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import doctorImg from "../asists/العيادات الخصوصية/Img background.png";

const Hospitals = (props) => {
  const [clinecState, setCliencState] = useState({
    activeClince: null,
    clinecs: [
      { title: "امراض القلب", img: tennis },
      { title: "امراض الكلي", img: tennis },
      { title: "امراض الدم", img: tennis },
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
  return (
    <>
      <ServiceHeader title="المستشفيات" />
      <Container>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="التخصصات">
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
              <div className="doctors d-flex justify-content-center flex-wrap">
                {doctorData.map((doctor, i) => {
                  if (clinecState.activeClince == null) {
                    return <DoctorCard key={i} {...doctor} />;
                  }
                  if (clinecState.activeClince.title === doctor.specialtyName) {
                    return <DoctorCard key={i} {...doctor} />;
                  }
                  return "";
                })}
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="عن المستفشي">
            <div className="d-flex justify-content-center align-items-center">
              <p className="elnady__p">هنا تظهر معلومات عن المستشفي</p>
            </div>
          </Tab>
          <Tab eventKey="contact" title="تقيمات الزائرين">
            <div className="d-flex justify-content-center align-items-center">
              <p className="elnady__p">هنا تظهر تقيمات الزائرين</p>
            </div>
          </Tab>
          <Tab
            eventKey="save"
            title=" التأمين الطبي(لايتوفر تأمين طبي)"
            disabled
          >
            <div className="d-flex justify-content-center align-items-center">
              <p className="elnady__p">هنا تظهر تقيمات الزائرين</p>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
export default Hospitals;
