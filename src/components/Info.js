import PropTypes from "prop-types";
import "./Info.css";

const Info = ({ className = "" }) => {
  return (
    <div className={`info ${className}`}>
      <div className="info1">
        <div className="london">London</div>
        <div className="icbaseline-arrow-forward-ios-wrapper">
          <img
            className="icbaseline-arrow-forward-ios-icon"
            alt=""
            src="/icbaselinearrowforwardios.svg"
          />
        </div>
        <div className="district-info">
          <div className="soho">soho</div>
        </div>
        <div className="map-pin">
          <img
            className="mingcutelocation-fill-icon"
            alt=""
            src="/mingcutelocationfill.svg"
          />
        </div>
        <div className="map-link">
          <div className="view-on-map">View on map</div>
        </div>
      </div>
      <h3 className="poland-street2">21 Poland Street,#2</h3>
      <div className="ratings">
        <div className="separator">4.8</div>
        <div className="star-icon">
          <img
            className="material-symbolsstar-icon"
            alt=""
            src="/materialsymbolsstar.svg"
          />
        </div>
        <div className="rating-label">
          <div className="ratings1">83 Ratings</div>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  className: PropTypes.string,
};

export default Info;
