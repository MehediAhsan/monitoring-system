import Banner from "./Banner";
import imgBody from '../../assets/img4.png';

const Home = () => {
    const items = [
        'Phase 1',
        'Phase 2',
        'Phase 3',
        'Line Parameter 1',
        'Line Parameter 2',
        'Line Parameter 3',
      ];
    return (
        <div>
            <Banner></Banner>
            {/* FeatureImage */}
            <img src={imgBody} alt="body" className="w-100 p-5 shadow-lg" />
            {/* Measures Items */}
            <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-evenly bg-info bg-gradient">
  
  <div className="item-list">
      <h2 className="text-warning-emphasis fs-3">Measure Items(Phase &
Line Parameter)</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="fs-5">{item}</li>
        ))}
      </ul>
    </div>
    <div className="item-list">
      <h2 className="text-warning-emphasis fs-3">Safety Monitoring</h2>
      <ul style={{listStyleType:'square'}}>
        {items.map((item, index) => (
          <li key={index} className="fs-5">{item}</li>
        ))}
      </ul>
    </div>
  </div>
</div>
    );
};

export default Home;