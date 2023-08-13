import S1 from "../asists/الحرف والعمال/Mask Group 21.png";
import ServiceHeader from "../components/ServiceHeader";

function Industry() {
  return (
    <>
      <ServiceHeader title="المصانع" />
      <section className="container mb-5 ">
        <div className="row">
          <div className="col-lg-3">
            <div class="card">
              <img src={S1} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <p class="card-text">
                  {" "}
                  يوفر المصنع جميع انواع الطوب بجودة مرتفعة وامداد الطوب المصنع
                  عمر زائد وهو المصنع الوحيد المتاح داخل القرية{" "}
                </p>
                <hr />
                <a
                  href="#s"
                  class="btn btn-light text-success fs-6 rounded me-5"
                >
                  {" "}
                  لا يتوفر معلومات اضافية الان{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Industry;
