
const Banner = () => {
    return (
        <div className=" col-xxl-8 px-4 py-5 bg-info" style={{ transform: [{ skewY: '50deg' }] }}>
    <div className="container mx-auto row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">SMART TRANSFORMER
            MONITORING SYSTEM</h1>
      </div>
    </div>
  </div>
    );
};

export default Banner;