import Banner from "./Banner";
import imgBody from "../../assets/img4.png";
import Common from "../common/Common";
import imgStatus from "../../assets/img5.png";
import imgTimeSeries from "../../assets/img1.jpeg";
import imgDetailsStatus from "../../assets/img2.png";
import imgSummary from "../../assets/img3.png";

const Home = () => {
  const items = [
    "Phase 1",
    "Phase 2",
    "Phase 3",
    "Line Parameter 1",
    "Line Parameter 2",
    "Line Parameter 3",
  ];
  return (
    <div>
      <Banner></Banner>
      {/* FeatureImage */}
      <img src={imgBody} alt="body" className="w-100 p-5" />
      {/* Measures Items */}
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-evenly bg-primary bg-gradient my-5">
        <div className="item-list">
          <h2 className="text-warning fs-3">
            Measure Items(Phase & Line Parameter)
          </h2>
          <ul className="text-light">
            {items.map((item, index) => (
              <li key={index} className="fs-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="item-list">
          <h2 className="text-warning fs-3">Safety Monitoring</h2>
          <ul style={{ listStyleType: "square" }} className="text-light">
            {items.map((item, index) => (
              <li key={index} className="fs-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h1 className="text-primary text-center my-5">REMOTE MONITORING & REPORT SYSTEM</h1>

      {/* Multiple Transformer Status */}
      <Common title={`Multiple Transformer Status`} img={imgStatus} divClass={`flex-lg-row`}></Common>

      {/* Time Series Transformers Parameter */}
      <Common title={`Time Series Transformers Parameter`} img={imgTimeSeries} divClass={`flex-lg-row-reverse`}></Common>

      {/* Transformer Details Status */}
      <Common title={`Transformer Details Status`} img={imgDetailsStatus} divClass={`flex-lg-row`}></Common>

      {/* Transformers Summary */}
      <Common title={`Transformers Summary`} img={imgSummary} divClass={`flex-lg-row-reverse`}></Common>
    </div>
  );
};

export default Home;
