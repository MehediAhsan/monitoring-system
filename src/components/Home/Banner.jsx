import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="col-xxl-8 px-4 py-5 bg-info bg-gradient w-full ">
    <div className="container mx-auto row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={bannerImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  loading="lazy"/>
      </div>
      <div className="col-lg-6 text-light">
        <h1 className="fw-semibold lh-1 mb-3">SMART TRANSFORMER</h1>
        <h1 className="fw-semibold lh-1 mb-3">MONITORING SYSTEM</h1>
      </div>
    </div>
  </div>
    );
};

export default Banner;