import S2 from "../asists/المدارس/Mask Group 12.png";
import S4 from "../asists/المدارس/Mask Group 13.png";
import S5 from "../asists/المدارس/Mask Group 14.png";
import S3 from "../asists/المدارس/Mask Group 15.png";
import ServiceHeader from "../components/ServiceHeader";
import { useState } from "react";
import Clinec from "../components/Clinec";
import { Tabs, Tab, Container } from "react-bootstrap";
import TeacherCard from "../components/TeacherCard";
function Schools() {
  const [clinecState, setCliencState] = useState({
    activeClince: null,
    clinecs: [
      { title: "مدرسة رأس الخليج", img: S2 },
      { title: "مدرسه مممدوج ابو النجا", img: S3 },
      { title: " رأس الخليج اعدادي", img: S4 },
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
  const teacherData = [
    {
      school: "مدرسة رأس الخليج",
      name: "أسامه حسين عبد السلام",
      subject: "اللغة العربية",
      rate: "من 10 زوار المدرس",
      phase: "المرحلة الابتدائية",
    },
    {
      school: "مدرسة رأس الخليج",
      name: "أسامه حسين عبد السلام",
      subject: "اللغة العربية",
      rate: "من 10 زوار المدرس",
      phase: "المرحلة الابتدائية",
    },
    {
      school: "مدرسة رأس الخليج",
      name: "أسامه حسين عبد السلام",
      subject: "دراسات",
      rate: "من 10 زوار المدرس",
      phase: "المرحلة الابتدائية",
    },
    {
      school: "مدرسة رأس الخليج",
      name: "أسامه حسين عبد السلام",
      subject: "دراسات",
      rate: "من 10 زوار المدرس",
      phase: "المرحلة الابتدائية",
    },
    {
      school: "مدرسة رأس الخليج",
      name: "أسامه حسين عبد السلام",
      subject: "رياضيات",
      rate: "من 10 زوار المدرس",
      phase: "المرحلة الابتدائية",
    },
    {
      school: "مدرسة رأس الخليج",
      name: "أسامه حسين عبد السلام",
      subject: "رياضيات",
      rate: "من 10 زوار المدرس",
      phase: "المرحلة الابتدائية",
    },
  ];
  const [currentSpe, setCurrentSpe] = useState("كل التخصصات");

  const currentDoctorHandler = (current) => {
    setCurrentSpe(current);
  };
  console.log(clinecState.activeClince);
  return (
    <>
      <ServiceHeader title="المدارس" />

      <section className="school" id="school">
        <Container>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="المدارس">
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
                {clinecState.activeClince && (
                  <select
                    id="specialty"
                    name="كل التخصصات"
                    onChange={(e) => {
                      currentDoctorHandler(e.target.value);
                    }}
                  >
                    <option value="كل التخصصات">كل التخصصات</option>
                    <option value="اللغة العربية">اللغة العربية</option>
                    <option value="دراسات">دراسات</option>
                    <option value="رياضيات">رياضيات</option>
                  </select>
                )}
                <div className="doctors d-flex justify-content-evenly flex-wrap">
                  {teacherData.map((teacher, i) => {
                    if (clinecState.activeClince == null) {
                      return;
                    }
                    if (currentSpe === "كل التخصصات") {
                      if (clinecState.activeClince.title == teacher.school) {
                        return <TeacherCard key={i} {...teacher} />;
                      }
                    }
                    if (currentSpe === teacher.subject) {
                      return <TeacherCard key={i} {...teacher} />;
                    }
                  })}
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="عن المدارس">
              <div className="d-flex justify-content-center align-items-center">
                <p className="elnady__p">هنا تظهر معلومات عن المدارس</p>
              </div>
            </Tab>
            <Tab eventKey="contact" title="تقيمات الزائرين">
              <div className="d-flex justify-content-center align-items-center">
                <p className="elnady__p">هنا تظهر تقيمات الزائرين</p>
              </div>
            </Tab>
          </Tabs>
        </Container>
      </section>
    </>
  );
}

export default Schools;
