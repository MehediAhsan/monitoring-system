// import bannerImg from '../../assets/banner.png'
import { useLottie } from "lottie-react";
import resaleAnimation from "../../assets/animate.json";

const Banner = () => {
    const options = {
      animationData: resaleAnimation,
      loop: true
    };

    const { View } = useLottie(options);
    return (
    <div className="d-flex flex-column flex-md-row p-4 gap-5 py-md-5 align-items-center justify-content-evenly bg-info bg-gradient vh-100 mb-5">
      <div className="text-light">
        <h1 className="fw-semibold lh-1 mb-3">SMART TRANSFORMER</h1>
        <h1 className="fw-semibold lh-1">MONITORING SYSTEM</h1>
      </div>
      <div className="w-50">
        {/* <img src={bannerImg} className="d-block mx-lg-auto img-fluid animate__animated animate__bounceIn" alt="Bootstrap Themes"  loading="lazy"/> */}
        {View}
      </div>
    </div>
    );
};

export default Banner;