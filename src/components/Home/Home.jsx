import Banner from "./Banner";
import imgBody from "../../assets/img4.png";
import Common from "../common/Common";
import imgStatus from "../../assets/img5.png";
import imgTimeSeries from "../../assets/img1.jpeg";
import imgDetailsStatus from "../../assets/img2.png";
import imgSummary from "../../assets/img3.png";

const Home = () => {
  const items = [
    "Current",
    "Voltage",
    "Frequency",
    "Power Factor",
    "Active Energy",
    "Reactive Energy",
    "Apparent Energy",
  ];
  const monitors = [
    "Phase Loss or Recovery",
    "Overload or Exceed pre-set Value",
    "Oil Level or Temperature",
    "Advance Data Analysis(Optional)",
  ];
  const textStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };
  return (
    <div className="overflow-hidden">
      <Banner></Banner>
      {/* FeatureImage */}
      <div className="d-flex justify-content-center">
      <img data-aos="fade-up" data-aos-duration="2000" src={imgBody} alt="body" className="w-100 p-5" style={{width: "100%",maxWidth: "650px"}} />
      </div>
      {/* Measures Items */}
      <div data-aos="fade-up" data-aos-duration="1000" className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-evenly bg-primary bg-gradient my-5">
        <div data-aos="fade-left" data-aos-duration="1000" className="item-list">
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
        <div data-aos="fade-right" data-aos-duration="1000" className="item-list">
          <h2 className="text-warning fs-3">Safety Monitoring</h2>
          <ul style={{ listStyleType: "square" }} className="text-light">
            {monitors.map((item, index) => (
              <li key={index} className="fs-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h1 className="text-primary text-center my-5" style={textStyle}>REMOTE MONITORING & REPORT SYSTEM</h1>

      {/* Multiple Transformer Status */}
      <div><Common title={`Multiple Transformer Status`} img={imgStatus} divClass={`flex-lg-row`} imgClass={`shadow-none`}></Common></div>

      {/* Time Series Transformers Parameter */}
      <div><Common title={`Time Series Transformers Parameter`} img={imgTimeSeries} divClass={`flex-lg-row-reverse`} bgColor={`#ECF6FC`}></Common></div>

      {/* Transformer Details Status */}
      <div><Common title={`Transformer Details Status`} img={imgDetailsStatus} divClass={`flex-lg-row`}></Common></div>

      {/* Transformers Summary */}
      <div className="pb-5"><Common title={`Transformers Summary`} img={imgSummary} divClass={`flex-lg-row-reverse`}></Common></div>

    </div>
  );
};

export default Home;
