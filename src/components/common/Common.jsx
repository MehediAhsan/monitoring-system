
const Common = ({title, img, divClass}) => {
    return (
        <div className={`container mx-auto row ${divClass} align-items-center g-5 py-5 my-5`}>
      <div data-aos="fade-left" data-aos-duration="3000" className="col-10 col-sm-8 col-lg-6">
        <img src={img} className="d-block mx-lg-auto img-fluid shadow-lg" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div data-aos="fade-right" data-aos-duration="3000" className="col-lg-6">
        <h1 className=" fw-bold text-body-emphasis fs-2 lh-1 mb-3 text-center">{title}</h1>
      </div>
    </div>
    );
};

export default Common;