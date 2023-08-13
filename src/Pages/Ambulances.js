import React from "react";
import Ambu1 from "../asists/الإسعاف والطوارئ/Mask Group 27.png";
import ServiceHeader from "../components/ServiceHeader";
import Star from "../components/Star";
function Ambulances() {
  return (
    <>
      <ServiceHeader title="الإسعاف والطوارئ" />
      <section className="container mb-5">
        <div className="ClubL  p-4">
          <a className="fs-5" href="#i">
            {" "}
            الاسعاف{" "}
          </a>
          <a className="fs-5" href="#i">
            {" "}
            عن الاسعاف{" "}
          </a>
          <a className="fs-5" href="#i">
            {" "}
            تقييمات الزائرين{" "}
          </a>
        </div>

        <div className="row">
          <div className="col-6 text-center">
            <a className="text-decoration-none" href="#s">
              <h4 className="text-dark"> اسعاف رأس الخليج </h4>
              <img src={Ambu1} alt="" />
            </a>
          </div>

          <div className="col-6 text-center">
            <a className="text-decoration-none" href="#s">
              <h4 className="text-dark"> تكريم الموتي </h4>
              <img src={Ambu1} alt="" />
            </a>
          </div>
        </div>
        <hr />

        <div className="row mb-5 mt-5">
          <div className="col-lg-6">
            <div className="card text-center rounded">
              <Star />
              <h5>التقييم العام : من 10 زوار للاسعاف </h5>
              <h5> العنوان : الطريق السريع رأس الخليج </h5>
              <h5> التليفون : 0507974123 </h5>
              <h5> الخدمة : 24 ساعة </h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card text-center rounded">
              <Star />
              <h5>التقييم العام : من 10 زوار للاسعاف </h5>
              <h5> العنوان : الطريق السريع رأس الخليج </h5>
              <h5> التليفون : 0507974123 </h5>
              <h5> الخدمة : 24 ساعة </h5>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
}

export default Ambulances;
