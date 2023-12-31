
const Common = ({ title, img, divClass, imgClass, bgColor }) => {
  const textStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className={`container py-5 my-5`}>
        <div className={`row ${divClass} flex-column-reverse flex-md-row align-items-center g-3 mx-2 mx-md-3`}>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-12 col-lg-6 px-4 px-md-0"
          >
            <img
              src={img}
              className={`d-block mx-auto img-fluid shadow-lg ${imgClass}`}
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-lg-6">
            <h1 className="fw-semibold fs-1 lh-1 mb-5 mb-md-0 text-center" style={textStyle}>
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;