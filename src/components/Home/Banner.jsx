import { useLottie } from "lottie-react";
import resaleAnimation from "../../assets/animate.json";

const Banner = () => {
  const options = {
    animationData: resaleAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  const textStyle = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    color: "#ffffff",
  };

  const gradientStyle = {
    background: 'linear-gradient(to right, #76DBFD, #46C7F4)', 
    
  };

  return (
    <div className="container-fluid py-5 py-md-0" style={gradientStyle}>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-12 col-md-6 text-center ">
            <h1 className="fw-bold lh-1 mb-3" style={textStyle}>SMART TRANSFORMER</h1>
            <h1 className="fw-bold lh-1" style={textStyle}>MONITORING SYSTEM</h1>
          </div>
          <div className="col-12 col-md-6 text-center py-5 py-md-0">
            {View}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
